class Trial {
  static all = []

  constructor(data) {
    // console.log('creating new trial')
    // console.log('input data keys: ' + Object.keys(data))
    // console.log('input data vals: ' + Object.values(data))
    this.id = data.id
    this.maxTurns = data.max_turns
    this.game_id = data.game_id
    this.player_id = data.player_id
    this.n_number = data.n_number
    this.save()
  }

  save() {
    Trial.all.push(this)
  }

  calculateScore() {
    // get num of possible correct choices
    let maxScorePossible = 0
    // let possiblePositionMatches = []
    // let possibleAudioMatches = []
    let totalScore = 0

    Turn.all.forEach((turn) => {
      // if match, add to maxScorePossible
      if (turn.trueMatch(this.n_number, 'grid_position')) {
        maxScorePossible += 1
        console.log(`turn ${turn.id} has true match, total possible: ${maxScorePossible}`)
        console.log(turn)
        console.log('did user guess match?')
        console.log(turn.user_selected_position)
        console.log(turn.user_selected_position === true)
        if (turn.user_selected_position === true) {
          console.log('this turn has correct position guess')
          totalScore += 1
        } else if (turn.user_selected_position === false) {
          console.log('this turn has incorrect position guess')
          totalScore -= 0.5
        }
      }

      // if (turn.trueMatch(this.n_number, 'asset_id')) {
      //   possibleAudioMatches.push(turn)
      // }
    });

    // possiblePositionMatches.forEach((turn) => {
    //   if (turn.user_selected_position === true) {
    //     totalScore += 1
    //   }
    // });

    // possibleAudioMatches.forEach((turn) => {
    //   if (turn.user_selected_audio === true) {
    //     totalScore += 1
    //   }
    // });

    // let totalScorePossible = possibleAudioMatches.length + possiblePositionMatches.length

    return Math.round((totalScore / maxScorePossible) * 100)
  }
}
