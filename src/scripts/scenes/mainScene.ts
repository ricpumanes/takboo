import MenuButton from '../objects/menu-button'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.fpsText = new FpsText(this)

    const screenWidth = this.game.config.width as number
    const screenHeight = this.game.config.height as number

    const offSet = 100

    const buttonWidth = screenWidth * 0.05
    const buttonHeight = screenHeight * 0.07

    // logo
    const logo = this.add.image(screenWidth / 2, screenHeight * 0.2, 'logo')
    logo.setDisplaySize(screenWidth * 0.1, screenHeight * 0.1)

    const logoText = this.add.text(screenWidth / 2, screenHeight * 0.32, 'Takboo', {
      fontSize: '48px',
      color: '#111111'
    })
    logoText.setOrigin(0.5, 0.5)

    /*
    =======================================
    PLAY BUTTON
    =======================================
    */

    new MenuButton({
      scene: this,
      x: screenWidth * 0.4,
      y: screenHeight * 0.5,
      image: 'playButton',
      text: 'Start Game',
      width: buttonWidth,
      height: buttonHeight,
      onClick: () => this.scene.start('GameScene')
    })

    /*
    =======================================
    SETTINGS BUTTON
    =======================================
    */
    new MenuButton({
      scene: this,
      x: screenWidth * 0.4,
      y: screenHeight * 0.5 + offSet,
      image: 'settingsButton',
      text: 'Settings',
      width: buttonWidth,
      height: buttonHeight,
      onClick: () => this.scene.start('SettingsScene')
    })
  }

  update() {
    this.fpsText.update()
  }
}
