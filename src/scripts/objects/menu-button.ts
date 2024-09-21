type MenuButtonType = {
  scene: Phaser.Scene
  x: number
  y: number
  image: string
  text: string
  width: number
  height: number
  onClick: () => void
}

export default class MenuButton extends Phaser.GameObjects.Container {
  constructor({ scene, x, y, text, image, height, width, onClick }: MenuButtonType) {
    super(scene, x, y)

    // Create button image
    const button = scene.add.image(0, 0, image)
    button.setDisplaySize(width, height)

    // Create text for the button
    const buttonText = scene.add.text(width * 0.75, 0, text, {
      fontSize: '32px',
      color: '#111111'
    })

    // Align text next to the button
    buttonText.setOrigin(0, 0.5)

    // Add button and text to the container
    this.add(button)
    this.add(buttonText)

    // Set container size and make it interactive
    this.setSize(button.width + buttonText.width, button.height)
    this.setInteractive()

    // Set click event
    this.on('pointerdown', onClick)

    // Add this container to the scene
    scene.add.existing(this)
  }
}
