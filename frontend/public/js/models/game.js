class Game {
  constructor(data) {
    this.speed = data.speed
  }

  set gameSpeed(speed) {
    const options = {fast: 2500, normal: 3200, slow: 3900}
    this.speed = options[speed]
  }
}
