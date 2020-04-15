class Turn {
  static all = []

  constructor(data) {
    this.id = data.id
    this.trial_id = data.trial_id
    this.player_id = data.player_id
    this.grid_position = data.grid_position
    this.asset_id = data.asset_id
    this.user_selected_position = data.user_selected_position
    this.user_selected_audio = data.user_selected_audio
    this.save()
  }

  save() {
    Turn.all.push(this)
  }

  // PATCH request to server
  update() {
    const configObject = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correct_audio_guess: this.correct_audio_guess,
        correct_position_guess: this.correct_position_guess,
        user_selected_audio: this.user_selected_audio,
        user_selected_position: this.user_selected_position
      })
    }
    fetch(`http://localhost:3000/turns/${this.id}`, configObject)
      .then(resp => resp.json())
      .then(obj => console.log(`turn ${this.id} updated (${obj.id})`))
  }

  // returns Turn n-Back from self
  // returns false if from different trial or not found
  nBack(n_number) {
    const q = Turn.all.find(turn => turn.id === this.id - n_number)
    // make sure it's in the same trial
    if (q && q.trial_id === this.trial_id) {
      return q
    } else {
      //console.log('not found')
      return false
    }
  }

  // logs if user guessed correctly on a turn
  // by adding this.correct_x_guess = true/false
  analyzeChoices(n_number) {
    // first, check if user SHOULD have made a choice
    if (this.trueMatch(n_number, 'grid_position')) {
      // if so, see if user DID make a choice
      if (this.user_selected_position === true) {
        // if so, log correct choice
        this.correct_position_guess = true
      } else {
        // if not, log incorrect choice
        this.correct_position_guess = false
      }
    } else if (this.user_selected_position === true && this.trueMatch(n_number, 'grid_position')) {
      // no true match, but user guessed incorrectly
      this.correct_position_guess = false
    }


    // do the same for audio choice
    if (this.trueMatch(n_number, 'asset_id')) {
      if (this.user_selected_audio === true) {
        this.correct_audio_guess = true
      } else {
        this.correct_audio_guess = false
      }
    } else if (this.user_selected_audio === true) {
      // no true match, but user guessed incorrectly
      this.correct_audio_guess = false
    }

  }

  // process all turns and update server
  static analyzeAll(n_number) {
    Turn.all.forEach((turn) => {
      turn.analyzeChoices(n_number)
      turn.update()
    });
  }

  // return true if matches with given n_number
  trueMatch(n_number, attributeString) {
    if (this.nBack(n_number)[`${attributeString}`] === this[`${attributeString}`]) {
      console.log(`this turn's (${this.id}) ${attributeString} matches turn ${this.nBack(n_number).id}`)
      return true
    } else {
      return false
    }
  }

}
