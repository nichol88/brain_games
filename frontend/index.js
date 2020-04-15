document.addEventListener('DOMContentLoaded', () => {
  applyModal()
  addStartGameButton()
})

// Game Loop
function startGameLoop(n_number) {

  createTrial(n_number)

  document.addEventListener('keydown', (e) => {
    // if key is a game key
    if (e.key === 'l' || e.key === 'a'){
      // console.log(e.key)
      // get the active element (cell)
      const activeElement = document.querySelector('.active')
      // console.log('grabbing element: ' + activeElement.id)
      // based on which key,
      // save choice to turn based on ID of active element
      if (activeElement) {
        const turnId = parseInt(activeElement.getAttribute('id'))
        //console.log('get turn with id: ' + turnId)
        const turn = Turn.all.find(item => item.id === turnId)
        //console.log(turn)

        switch (e.key) {
          case 'a':
            //console.log('selected audio match')
            turn.user_selected_audio = true
            //console.log('updated turn.user_selected_audio => ' + turn.user_selected_audio)
            break;
          case 'l':
            //console.log('selected position match')
            turn.user_selected_position = true
            //console.log('updated turn.user_selected_position => ' + turn.user_selected_position)
            break;
        }
      }
    }
  })
  // begin game loop
  setTimeout(mainLoop, 2000)
}

function mainLoop() {
  console.log('main game loop')

  resetTurnCounter()

  const cells = document.getElementsByClassName('grid__item')
  let turns = Turn.all

  turns.forEach((turn, i) => {
    setTimeout(function() {
      takeTurn(turn, cells, i)
    }, 3200 * i )
  })
}

function takeTurn(turnObject, gridCells) {
  const turnNum = incrementTurnCounter()
  toggleDisplay(gridCells[turnObject.grid_position], turnObject.id)
  turnObject.startTime = Date.now()
  //console.log(turnObject.startTime)
  if (turnNum === 24) {
    setTimeout(function() {
      endGame()
    }, 3200)
  }
}

function endGame() {

  //Turn.analyzeAll(n_number)

  const score = Trial.all[0].calculateScore()

  // Display results to user
  const scoreModal = document.getElementById('score-modal')
  const scoreDisplay = document.getElementById('score-display')
  scoreDisplay.innerText = `${score}%`
  scoreModal.style.display = 'block'
  let span = document.getElementsByClassName("close")[1];

  // if score is high enough, increase level by
  // altering n_number span
  if (score > 0.8) {
    document.getElementById('start_game').innerText = 'Next Level!'
    increaseLevel()
  }

  span.onclick = function() {
    scoreModal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == scoreModal) {
      scoreModal.style.display = "none";
    }
  }

  // Allow user to save?

  // re-enable start game button
  document.getElementById('start_game').disabled = false

  // clear Trial and Turns
  Turn.all = []
  Trial.all = []

}

function increaseLevel() {
  const e = document.getElementById('n_number')
  const old = e.innerText
  if (old === 'n') {
    e.innerText = 1
  } else {
    e.innerText = parseInt(old) + 1
  }
}

function incrementTurnCounter() {
  const counter = document.querySelector('#turn-counter')
  counter.innerText = parseInt(counter.innerText) + 1
  return parseInt(counter.innerText)
}

function resetTurnCounter() {
  document.querySelector('#turn-counter').innerText = 0
}

// highlight a grid element temporarily
function toggleDisplay(element, turnId) {
  element.classList.add('active')
  element.classList.add(`turn_id_${turnId}`)
  element.setAttribute('id', turnId)
  console.log('display ' + element.id)
  setTimeout(function() {
    element.setAttribute('id', '')
    element.classList.remove('active')
    element.classList.remove(`turn_id_${turnId}`)
  }, 3100)
}

// POST new Trial, populate turns
async function createTrial(n_number) {
  const configObject = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({game_id: 1 , max_turns: 24, n_number: n_number})
  }
  let response = await fetch('http://localhost:3000/trials', configObject)
  let trial = await response.json()
  const newTrial = new Trial(trial)
  let turns = loadTurns(newTrial.id)
  return turns
}

async function loadTurns(trialId) {
  let response = await fetch(`http://localhost:3000/trials/${trialId}/turns`)
  let turns = await response.json()
  let turnObjects = []
  for (let i = 0; i < turns.length; i++) {
    const t = new Turn(turns[i])
    turnObjects.push(t)
  }
  return turnObjects
}

// Add the modal
function applyModal() {
  let modal = document.getElementById("myModal");
  // Get the button that opens the modal
  let btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function pressButtonAnimation(button) {
  button.classList.add('w3-black')
  setTimeout(function() {
    button.classList.remove('w3-black')
  }, 100)
}

// attach functino to start game button
function addStartGameButton() {
  const btn = document.getElementById('start_game')
  btn.addEventListener('click', (e) => {
    console.log("Click -> Start Game")
    document.getElementById('score-display').innerText = ''
    let n = document.getElementById('n_number')
    if (n.innerText === 'n') {
      n.innerText = 1
      startGameLoop(1)
    } else {
      startGameLoop(parseInt(n.innerText))
    }
    btn.disabled = true
  })
}
