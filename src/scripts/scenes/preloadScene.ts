export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('logo', 'assets/img/logo.png')
    this.load.image('playButton', 'assets/img/play-button.png')
    this.load.image('settingsButton', 'assets/img/setting.png')

    // Display a loading bar
    let loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff // white loading bar
      }
    })

    this.load.on('progress', (percent: number) => {
      loadingBar.fillRect(0, (this.game.config.height as number) / 2, (this.game.config.width as number) * percent, 50)
    })
  }

  create() {
    this.scene.start('MainScene')
  }
}
