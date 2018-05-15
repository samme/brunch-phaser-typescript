export default class DefaultScene extends Phaser.Scene {

  progressBar: Phaser.GameObjects.Graphics;

  constructor () {
    super('default');
    this.progressBar = null;
  }

  init (data) {
    console.debug('init', data, this);
  }

  preload () {
    this.load.image('sky', 'space3.png');
    this.load.image('logo', 'phaser3-logo.png');
    this.progressBar = this.add.graphics();
    this.load.on('progress', this.onLoadProgress, this);
    this.load.on('complete', this.onLoadComplete, this);
  }

  create () {
    const sky = this.add.image(400, 300, 'sky');
    sky.alpha = 0.5;
    const logo = this.physics.add.image(400, 100, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
  }

  // extend:

  onLoadComplete (loader, totalComplete, totalFailed) {
    console.debug('complete', totalComplete);
    console.debug('failed', totalFailed);
    this.progressBar.destroy();
  }

  onLoadProgress (progress) {
    console.debug('progress', progress);
    this.progressBar
      .clear()
      .fillStyle(0xffffff, 0.75)
      .fillRect(0, 0, 800 * progress, 50);
  }

};
