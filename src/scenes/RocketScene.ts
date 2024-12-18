import { Scene } from 'phaser';
import { Subreddit, subreddits } from '../types/subreddit';

export class RocketScene extends Scene {
  private rocket!: Phaser.Physics.Arcade.Sprite;
  private fuel: number = 200;
  private height: number = 0;
  private username: string;
  private background!: Phaser.GameObjects.TileSprite;
  private startText!: Phaser.GameObjects.Text;
  private grass!: Phaser.GameObjects.Rectangle;
  private gameStarted: boolean = false;
  private usernameText!: Phaser.GameObjects.Text;
  private fuelGauge!: Phaser.GameObjects.Graphics;
  private steeringDirection: number = 0;
  private maxRotation: number = 10; // Maximum rotation angle
  private rotationSpeed: number = 2; // Degrees per update
  private targetRotation: number = 0;
  private rotationDamping: number = 0.1; // Controls the smoothness of rotation
  private selectionActive: boolean = false;
  private subredditOptions: Phaser.GameObjects.Container[] = [];
  private selectedSubreddit: string = '';
  private nextSelectionHeight: number = 100;
  private optionsGroup!: Phaser.GameObjects.Container;
  private selectionStarted: boolean = false;
  private constantScrollSpeed: number = 2; // Add this - pixels per frame
  private optionsSpawnDistance: number = 50; // how far ahead to spawn options
  private nextSpawnHeight: number = 100;
  private spawnInterval: number = 100; // Height units between spawns
  private lastSpawnHeight: number = 0;
  
  constructor() {
    super({ key: 'RocketScene' });
    this.username = 'u/user'; // Replace with actual username
  }

  preload() {
    this.load.image('rocket', 'assets/rocket.png');
    this.load.image('selector', 'assets/selector.png');
    
    // Load subreddit images
    this.load.setBaseURL(''); // Reset base URL
    subreddits.forEach((sub, index) => {
      // Add CORS parameter to URL instead of setting it on the image
      const corsUrl = sub.icon + (sub.icon.includes('?') ? '&' : '?') + 'crossorigin';
      this.load.image(`sub${index}`, corsUrl);
    });

    // Check if WebAudio is supported
    if (this.sys.game.device.audio.webAudio) {
      this.load.audio('thrust', 'assets/thrust.mp3')
        .on('loaderror', () => {
          console.warn('Audio load error: thrust.mp3');
          // Continue game without audio
          this.cache.audio.add('thrust', null);
        });
        
      this.load.audio('explosion', 'assets/explosion.mp3')
        .on('loaderror', () => {
          console.warn('Audio load error: explosion.mp3');
          // Continue game without audio
          this.cache.audio.add('explosion', null);
        });
    }
  }

  create() {
    // Create a larger background that fills more than the view to prevent gaps
    this.background = this.add.tileSprite(0, 0, 800, 1200, '');
    this.background.setOrigin(0, 0);
    // Create a graphics object to fill the background with sky blue
    const bgGraphics = this.add.graphics();
    bgGraphics.fillStyle(0x87CEEB, 1);
    bgGraphics.fillRect(0, 0, 800, 1200);
    // Convert the graphics to a texture
    const texture = bgGraphics.generateTexture('bg', 800, 1200);
    bgGraphics.destroy();
    // Apply the texture to the background
    this.background.setTexture('bg');
    this.background.setScrollFactor(0);

    // Add grass platform without setting scroll factor
    this.grass = this.add.rectangle(0, 550, 800, 89, 0x2d572c);
    this.grass.setOrigin(0, 0);

    // Create rocket sprite
    this.rocket = this.physics.add.sprite(400, this.grass.y, 'rocket');
    this.rocket.setOrigin(0.5, -0.45); // Set origin to bottom center
    this.rocket.setScale(0.5);
    this.rocket.setCollideWorldBounds(true);
    
    // Keep rocket in view
    this.cameras.main.startFollow(this.rocket, true, 0, 1);

    // Add username text above the rocket
    this.usernameText = this.add.text(this.rocket.x, this.rocket.y - this.rocket.displayHeight * this.rocket.scaleY - 40, this.username, {
      fontSize: '18px',
      color: '#fff'
    });
    this.usernameText.setOrigin(0.5);

    // Initialize fuel gauge bar
    this.fuelGauge = this.add.graphics();
    this.fuelGauge.setDepth(1);

    // Create start button
    const startButton = this.add.rectangle(400, 300, 200, 60, 0x007bff)
      .setOrigin(0.5)
      .setScrollFactor(0)
      .setDepth(1)
      .setInteractive({ useHandCursor: true });

    const buttonText = this.add.text(400, 300, 'Start', {
      fontSize: '32px',
      color: '#fff'
    })
    .setOrigin(0.5)
    .setScrollFactor(0)
    .setDepth(2); // Ensure text is above the button

    // Hover effects
    startButton.on('pointerover', () => {
      startButton.setFillStyle(0x0056b3);
    });

    startButton.on('pointerout', () => {
      startButton.setFillStyle(0x007bff);
    });

    // Start game on button click
    startButton.on('pointerdown', () => {
      startButton.destroy();
      buttonText.destroy();
      this.gameStarted = true;
    });

    // Add input listener for pointer clicks
    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      if (pointer.x < this.game.scale.width / 2) {
        this.steeringDirection = -1; // Steer left
      } else {
        this.steeringDirection = 1;  // Steer right
      }
    });

    // Add input listener for pointer up to reset steering direction
    this.input.on('pointerup', (pointer: Phaser.Input.Pointer) => {
      if (pointer.x < this.game.scale.width / 2 && this.steeringDirection === -1) {
        this.steeringDirection = 0; // Stop steering left
      } else if (pointer.x >= this.game.scale.width / 2 && this.steeringDirection === 1) {
        this.steeringDirection = 0; // Stop steering right
      }
    });

    // Setup all other events first
    this.events.emit('updateFuel', this.fuel);
    this.events.emit('updateHeight', this.height);

    this.events.on('updateFuel', (fuel: number) => {
      this.registry.set('fuel', fuel);
    });

    this.events.on('updateHeight', (height: number) => {
      this.registry.set('height', height);
    });

    this.events.on('showPuzzle', () => {
      this.registry.set('showPuzzle', true);
    });

    this.game.events.on('refillFuel', () => {
      this.fuel = 200;
      this.game.events.emit('updateFuel', this.fuel);
    });

    this.game.events.on('continuePastPuzzle', () => {
      this.cleanupCurrentOptions();
      this.selectionActive = false;
      this.selectionStarted = false;
      this.nextSpawnHeight = this.height + this.spawnInterval;
    });

    this.optionsGroup = this.add.container(0, 0);
  }

  private getRandomSubreddits() {
    // Shuffle array and get first 4 items
    return [...subreddits]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }

  private createSelectionOptions() {
    this.cleanupCurrentOptions();
    
    const spacing = 150;
    const startX = this.cameras.main.centerX - (spacing * 1.5);
    // Spawn options way above the camera view
    const startY = this.rocket.y - this.cameras.main.height - 200;
    
    // Get random subreddits for this spawn
    const selectedSubreddits = this.getRandomSubreddits();
    
    selectedSubreddits.forEach((sub, index) => {
      const container = this.add.container(startX + index * spacing, startY);
      
      // Create circle background (make it slightly larger than the icon)
      const bg = this.add.circle(0, 0, 35, 0xffffff);
      
      // Create subreddit icon and ensure it's fully visible
      const img = this.add.image(0, 0, `sub${subreddits.indexOf(sub)}`)
        .setDisplaySize(60, 60)
        .setOrigin(0.5);
      
      const highlight = this.add.image(0, 0, 'selector')
        .setScale(0.8)
        .setAlpha(0);
      
      container.add([bg, img, highlight]);
      container.setData('subreddit', sub);
      
      this.subredditOptions.push(container);
      this.optionsGroup.add(container);
    });

    this.selectionStarted = true;
    this.selectionActive = false;
    this.lastSpawnHeight = this.height;
  }

  private cleanupCurrentOptions() {
    this.subredditOptions.forEach(container => container.destroy());
    this.subredditOptions = [];
    this.optionsGroup.removeAll(true);
  }

  update() {
    if (!this.gameStarted) {
      return; // Skip update logic until the game starts
    }

    if (this.fuel > 0) {
      // Remove the height-based puzzle trigger
      // if (this.height >= 100 && this.height < 101) {
      //   this.game.events.emit('showPuzzle');
      //   this.scene.pause();
      //   return;
      // }

      this.height += 0.4; // Increased from 0.1 to 1
      this.fuel -= 0.1;
      
      // Slow down the background scrolling speed
      this.background.tilePositionY += 0.02; // Reduced from 0.2 to 0.1
      
      // Color transition
      const progress = Math.min(this.height / 100, 1);
      const from = 0x87CEEB;  // Sky blue
      const to = 0x000033;    // Space color
      
      const r = Math.floor(Phaser.Math.Linear((from >> 16) & 0xff, (to >> 16) & 0xff, progress));
      const g = Math.floor(Phaser.Math.Linear((from >> 8) & 0xff, (to >> 8) & 0xff, progress));
      const b = Math.floor(Phaser.Math.Linear(from & 0xff, to & 0xff, progress));
      
      this.background.setTint(Phaser.Display.Color.GetColor(r, g, b));

      // Increase the rocket's upward speed
      this.rocket.y -= 0.9; // Increased from 0.1 to 0.3
      
      // Move grass down at the same speed
      this.grass.y += 0.1;

      this.game.events.emit('updateFuel', Math.floor(this.fuel));
      this.game.events.emit('updateHeight', Math.floor(this.height));

      // Update username text position to follow the rocket (with fixed offset)
      const usernameOffset = -171; // Adjust this value to position the name closer to rocket
      this.usernameText.x = this.rocket.x;
      this.usernameText.y = this.rocket.y - this.rocket.displayHeight * 0.5 - usernameOffset;

      // Update fuel gauge position and color (keep its position independent)
      const fuelPercentage = this.fuel / 200; // Assuming max fuel is 200
      const barHeight = 100/2;
      const barWidth = 10;

      // Create Phaser Color objects
      const redColor = Phaser.Display.Color.ValueToColor(0xff0000);   // Red
      const greenColor = Phaser.Display.Color.ValueToColor(0x00ff00); // Green

      // Interpolate color from green to red
      const fuelColor = Phaser.Display.Color.Interpolate.ColorWithColor(
        redColor,
        greenColor,
        100,
        fuelPercentage * 100
      );

      const color = Phaser.Display.Color.GetColor(fuelColor.r, fuelColor.g, fuelColor.b);

      this.fuelGauge.clear();
      // Draw background bar to the left of the rocket
      const fuelGaugeX = this.rocket.x - this.rocket.displayWidth * this.rocket.scaleX / 2 - barWidth + 15;
      // Lower the fuel gauge by adjusting its y-position
      const fuelGaugeY = this.rocket.y - barHeight / 2 + 170; // Increase the "+ 30" value to lower the bar

      this.fuelGauge.fillStyle(0x000000, 0.5);
      this.fuelGauge.fillRect(
        fuelGaugeX,
        fuelGaugeY,
        barWidth,
        barHeight
      );
      // Draw fuel bar
      this.fuelGauge.fillStyle(color);
      this.fuelGauge.fillRect(
        fuelGaugeX,
        fuelGaugeY + barHeight * (1 - fuelPercentage),
        barWidth,
        barHeight * fuelPercentage
      );
      
      // Handle steering rotation
      if (this.steeringDirection !== 0) {
        const steeringSpeed = 3; // Adjust steering speed as needed
        this.rocket.x += this.steeringDirection * steeringSpeed;

        // Apply rotation based on steering direction
        this.rocket.angle += this.steeringDirection * this.rotationSpeed;

        // Clamp the rotation to maximum limits
        if (this.rocket.angle > this.maxRotation) {
          this.rocket.angle = this.maxRotation;
        } else if (this.rocket.angle < -this.maxRotation) {
          this.rocket.angle = -this.maxRotation;
        }
      } else {
        // Smoothly reset rotation to 0 when not steering
        if (this.rocket.angle > 0) {
          this.rocket.angle -= this.rotationSpeed;
          if (this.rocket.angle < 0) this.rocket.angle = 0;
        } else if (this.rocket.angle < 0) {
          this.rocket.angle += this.rotationSpeed;
          if (this.rocket.angle > 0) this.rocket.angle = 0;
        }
      }
      
      // Set target rotation based on steering direction
      if (this.steeringDirection === -1) {
        this.targetRotation = this.maxRotation;
      } else if (this.steeringDirection === 1) {
        this.targetRotation = -this.maxRotation;
      } else {
        this.targetRotation = 0;
      }

      // Smoothly interpolate rocket's angle towards target rotation
      this.rocket.angle += (this.targetRotation - this.rocket.angle) * this.rotationDamping;

      // Add slight overshoot when correcting to 0 rotation for a cartoonish effect
      if (this.targetRotation === 0) {
        this.rocket.angle += Math.sin(this.game.loop.time / 100) * 0.5;
      }

      // Clamp rotation to maximum limits
      this.rocket.angle = Phaser.Math.Clamp(this.rocket.angle, -this.maxRotation, this.maxRotation);
      
      // Move selection spawning logic here
      // Spawn new options every 100 height units
      if (this.height >= this.nextSpawnHeight && !this.selectionStarted) {
        this.selectionStarted = true;
        this.createSelectionOptions();
        this.nextSpawnHeight += this.spawnInterval;
      }

      // Update selection options positions with constant movement
      if (this.selectionStarted && !this.selectionActive) {
        this.subredditOptions.forEach((container) => {
          // Increase scroll speed for smoother movement
          container.y += this.constantScrollSpeed * 1.5;
          
          // Check for collision between rocket and subreddit option
          const distance = Phaser.Math.Distance.Between(
            this.rocket.x,
            this.rocket.y,
            container.x,
            container.y
          );

          if (distance < 50) {
            this.selectionActive = true;
            const subreddit = container.getData('subreddit');
            this.physics.pause();
            this.game.events.emit('showPuzzle', subreddit);
            this.scene.pause();
          }
        });

        // Increase cleanup threshold to ensure options are fully off screen
        if (this.subredditOptions[0]?.y > this.cameras.main.height + 200) {
          this.cleanupCurrentOptions();
          this.selectionStarted = false;
        }
      }

      // Check if we need to spawn new options
      if (this.height >= this.lastSpawnHeight + this.spawnInterval) {
        this.createSelectionOptions();
      }

      // Update existing options
      if (this.selectionStarted && !this.selectionActive) {
        this.subredditOptions.forEach((container) => {
          container.y += this.constantScrollSpeed;
          
          const distance = Phaser.Math.Distance.Between(
            this.rocket.x,
            this.rocket.y,
            container.x,
            container.y
          );

          if (distance < 50) {
            this.selectionActive = true;
            const subreddit = container.getData('subreddit');
            this.physics.pause();
            this.game.events.emit('showPuzzle', subreddit);
            this.scene.pause();
          }
        });

        // Cleanup if all options are off screen
        if (this.subredditOptions[0]?.y > this.cameras.main.height + 100) {
          this.cleanupCurrentOptions();
          this.selectionStarted = false;
        }
      }
      
    } else {
      this.scene.pause();
      // Only play sound if audio is available
      if (this.cache.audio.exists('explosion')) {
        this.sound.play('explosion');
      }
    }

    if (this.steeringDirection !== 0) {
      const steeringSpeed = 2; // Adjust steering speed as needed
      this.rocket.x += this.steeringDirection * steeringSpeed;

      // Removed resetting steeringDirection to allow continuous steering
      // this.steeringDirection = 0;
    }

    // Handle selection highlighting
    if (this.selectionStarted) {
      const rocketX = this.rocket.x;
      this.subredditOptions.forEach((container) => {
        const distance = Math.abs(container.x - rocketX);
        const highlight = container.list[2] as Phaser.GameObjects.Image; // Ensure correct index for highlight
        highlight.setAlpha(distance < 50 ? 1 : 0);
      });
    }
  }
}
