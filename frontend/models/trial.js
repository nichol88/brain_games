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
    this.save()
  }

  save() {
    Trial.all.push(this)
  }

  analyzeTurns() {
    const turns = Turn.all
    const selections = Selection.all
    //const times = turns.map(item => item.startTime)
    // for each turn,
    turns.forEach((turn, i) => {
      //
    });

    // if selection is within 3.2 seconds of turn.startTime
    // turn.userSelectedCorrect = true
  }
}
