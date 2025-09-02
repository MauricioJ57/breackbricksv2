import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(512, 384, 'fondo');

        this.add.image(512, 200, 'pelota');

        this.add.image(512, 300, 'plataforma');

        this.add.image(512, 400, 'rectangulo');

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });

        /*this.rectangulos = this.physics.add.image(400, 100, 'rectangulo');
        this.rectangulos.setImmovable(true);*/

        /*this.plataforma = this.physics.add.image(400, 550, "plataforma");
        this.plataforma.setCollideWorldBounds(true);
        this.plataforma.setImmovable(true);

        this.pelota = this.physics.add.image(400, 500, "pelota").setCollideWorldBounds(true);
        this.pelota.setBounce(1);
        this.pelota.setVelocityY(-150);

        this.controles = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.pelota, this.plataforma);

        this.physics.add.collider(this.pelota, this.rectangulos, () => {
           this.rectangulos.destroy();
        });*/
    }
    
    /*update() {
    if (this.controles.left.isDown) {
      this.plataforma.setVelocityX(-300);
    } else if (this.controles.right.isDown) {
      this.plataforma.setVelocityX(300);
    } else {
      this.plataforma.setVelocityX(0);
    }
  
  }*/
}
