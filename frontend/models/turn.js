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

  // if user selected position this turn,
  // and this turn's position is the same as two turns ago,
  // this.position_match = true

}
