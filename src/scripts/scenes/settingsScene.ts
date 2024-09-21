export default class SettingsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SettingsScene' })
  }

  create() {
    const screenWidth = this.game.config.width as number
    const screenHeight = this.game.config.height as number

    const text = this.add.text(screenWidth / 2, screenHeight / 2, 'Under construction', {
      color: 'black',
      fontSize: '28px'
    })
    text.setOrigin(0.5, 0.5)

    const backText = this.add.text(0, 0, 'Back', {
      color: 'black',
      fontSize: '28px'
    })
    backText.setOrigin(0, 0)
    backText.setInteractive()

    backText.on('pointerdown', () => {
      this.scene.start('MainScene')
    })
  }
}
