// This sectin contains some game constants. It is not super interesting
var GAME_WIDTH = window.innerWidth;
var GAME_HEIGHT = window.innerHeight;

var ENEMY_WIDTH = 128;
var ENEMY_HEIGHT = 117;
var MAX_ENEMIES = 3;

var BONUS_WIDTH = 128;
var BONUS_HEIGHT = 117;
var MAX_BONUS = 1;

var PLAYER_WIDTH = 125;
var PLAYER_HEIGHT = 100;

// These two constants keep us from using "magic numbers" in our code
var LEFT_ARROW_CODE = 37;
var RIGHT_ARROW_CODE = 39;
var DOWN_ARROW_CODE = 40;
var UP_ARROW_CODE = 38;

// These two constants allow us to DRY
var MOVE_LEFT = 'left';
var MOVE_RIGHT = 'right';
var MOVE_DOWN = 'down';
var MOVE_UP = 'up';

var app = document.getElementById('app');
var button = document.createElement('button');
button.innerText="ready to try harder?";
button.className="resetButton";
button.onclick = function () {window.location.reload();};

var backgroundSound = new Audio('background.mp3');
var pauseButton = document.createElement('button');
pauseButton.innerText="~pause music~";
pauseButton.className="pauseButton";
pauseButton.onclick = function () {backgroundSound.pause()}

var lostSound = new Audio('sounds/damndudethatsuck.mp3');
var beerSound = new Audio('sounds/slurp.mp3');

// Preload game images
var images = {};
['brain2.png', 'background.jpg', 'knife4.png', 'beer.png'].forEach(imgName => {
    var img = document.createElement('img');
    img.src = 'images/' + imgName;
    images[imgName] = img;
});

// This section is where you will be doing most of your coding
class Entity {
    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y);
    }
}
//Making a bonus entity that gives bonus points

class Bonus extends Entity {
    constructor(xSpot) {
        super();
        this.x = xSpot;
        this.y = -BONUS_HEIGHT;
        this.sprite = images['beer.png'];
        this.speed = Math.random() / 4 + 0.25;
     }
     update(timeDiff) {
         this.y = this.y + timeDiff * this.speed;
     }
}

class Enemy extends Entity {
    constructor(xPos) {
        super();
        this.x = xPos;
        this.y = -ENEMY_HEIGHT;
        this.sprite = images['knife4.png'];

        // Each enemy should have a different speed
        this.speed = Math.random() / 2 + 0.25;
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }
}

class Player extends Entity {
    constructor() {
        super();
        this.x = 2 * PLAYER_WIDTH;
        this.y = GAME_HEIGHT - PLAYER_HEIGHT;
        this.sprite = images['brain2.png'];
    }

    // This method is called by the game engine when left/right arrows are pressed
    move(direction) {
        if (direction === MOVE_LEFT && this.x > 0) {
            this.x = this.x - PLAYER_WIDTH;
        }
        else if (direction === MOVE_RIGHT && this.x < GAME_WIDTH - PLAYER_WIDTH) {
            this.x = this.x + PLAYER_WIDTH;
        }
        else if (direction === MOVE_UP && this.y > 0) {
            this.y = this.y - PLAYER_HEIGHT;
        }
        else if (direction === MOVE_DOWN && this.y < GAME_HEIGHT - PLAYER_HEIGHT) {
            this.y = this.y + PLAYER_HEIGHT;
        }
    }
}

/*
This section is a tiny game engine.
This engine will use your Enemy and Player classes to create the behavior of the game.
The engine will try to draw your game at 60 frames per second using the requestAnimationFrame function
*/
class Engine {
    constructor(element) {
        // Setup the player
        this.player = new Player();

        // Setup enemies, making sure there are always three
        this.setupEnemies();

        // Setup bonus
        this.setupBonus();

        // Setup the <canvas> element where we will be drawing
        var canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        element.appendChild(canvas);

        this.ctx = canvas.getContext('2d');

        // Since gameLoop will be called out of context, bind it once here.
        this.gameLoop = this.gameLoop.bind(this);
    }

    /*
     The game allows for 5 horizontal slots where an enemy can be present.
     At any point in time there can be at most MAX_ENEMIES enemies otherwise the game would be impossible
     */
    setupEnemies() {
        if (!this.enemies) {
            this.enemies = [];
        }

        while (this.enemies.filter(e => !!e).length < MAX_ENEMIES) {
            this.addEnemy();
        }
    }

    // This method finds a random spot where there is no enemy, and puts one in there
    addEnemy() {
        var enemySpots = GAME_WIDTH / ENEMY_WIDTH;

        var enemySpot;
        // Keep looping until we find a free enemy spot at random
        while (enemySpot === undefined || this.enemies[enemySpot]) {
            enemySpot = Math.floor(Math.random() * enemySpots);
        }
        this.enemies[enemySpot] = new Enemy(enemySpot * ENEMY_WIDTH);
    }

    setupBonus () {
        if (!this.bonus) {
            this.bonus = [];           
        }
        while (this.bonus.filter(b => !!b).length < MAX_BONUS) {
            this.addBonus();
        }
    }

    addBonus () {
        var bonusSpots = GAME_WIDTH / BONUS_WIDTH;

        var bonusSpot;
        while (bonusSpot === undefined || this.bonus[bonusSpot]) {
            bonusSpot = Math.floor(Math.random() * bonusSpots);
        }
        this.bonus[bonusSpot] = new Bonus(bonusSpot * BONUS_WIDTH);
    }

    // This method kicks off the game
    start() {
        this.score = 0;
        this.lastFrame = Date.now();
        backgroundSound.play();
        app.appendChild(pauseButton);

        // Listen for keyboard left/right/down/up and update the player
        document.addEventListener('keydown', e => {
            if (e.keyCode === LEFT_ARROW_CODE) {
                this.player.move(MOVE_LEFT);
            }
            else if (e.keyCode === RIGHT_ARROW_CODE) {
                this.player.move(MOVE_RIGHT);
            }
            else if (e.keyCode === DOWN_ARROW_CODE) {
                this.player.move(MOVE_DOWN);
            }
            else if(e.keyCode === UP_ARROW_CODE) {
                this.player.move(MOVE_UP);
            }
        });

        this.gameLoop();
    }

    /*
    This is the core of the game engine. The `gameLoop` function gets called ~60 times per second
    During each execution of the function, we will update the positions of all game entities
    It's also at this point that we will check for any collisions between the game entities
    Collisions will often indicate either a player death or an enemy kill

    In order to allow the game objects to self-determine their behaviors, gameLoop will call the `update` method of each entity
    To account for the fact that we don't always have 60 frames per second, gameLoop will send a time delta argument to `update`
    You should use this parameter to scale your update appropriately
     */
    gameLoop() {
        // Check how long it's been since last frame
        var currentFrame = Date.now();
        var timeDiff = currentFrame - this.lastFrame;

        // Increase the score!
        this.score += timeDiff;

        // Call update on all enemies
        this.enemies.forEach(enemy => enemy.update(timeDiff));

        //Call update on bonus
        this.bonus.forEach(bonus => bonus.update(timeDiff));

        // Draw everything!
        this.ctx.drawImage(images['background.jpg'], -800, -800); // draw the star bg
        this.enemies.forEach(enemy => enemy.render(this.ctx)); // draw the enemies
        this.bonus.forEach(bonus => bonus.render(this.ctx)); // draw the bonus
        this.player.render(this.ctx); // draw the player

        // Check if any enemies should die
        this.enemies.forEach((enemy, enemyIdx) => {
            if (enemy.y > GAME_HEIGHT) {
                delete this.enemies[enemyIdx];
            }
        });
        this.setupEnemies();

         // Check if any bonus should die 
         this.bonus.forEach((bonus, bonusIdx) => {
            if (bonus.y > GAME_HEIGHT) {
                delete this.bonus[bonusIdx];
            }
        });
        this.setupBonus();

        if (this.verifyBonusPoints()) {
            this.score += 10000;
            beerSound.play();
            this.ctx.font = 'bold 30px Courier New'
            this.ctx.fillStyle = '#FFFFAF';
            this.ctx.fillText('10000 bonus points!', 5, 50);
            //this.lastFrame = Date.now();
            //requestAnimationFrame(this.gameLoop);
        }

        if (this.isPlayerDead()) {
            // If they are dead, then it's game over!
            lostSound.play();
            this.ctx.font = 'bold 30px Courier New';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillText(this.score + ': try harder next time!', 5, 30);
            app.appendChild(button);
        }

        else {
            // If player is not dead, then draw the score
            this.ctx.font = 'bold 30px Courier New';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillText(this.score, 5, 30);

            // Set the time marker and redraw
            this.lastFrame = Date.now();
            requestAnimationFrame(this.gameLoop);
        }
    }

    isPlayerDead() {
        var dead = false;
        this.enemies.forEach((enemies)=> {
            if (this.player.x <= enemies.x && enemies.x <= (this.player.x + PLAYER_WIDTH) && enemies.y >= (this.player.y - PLAYER_HEIGHT) && this.player.y >= enemies.y) dead = true;
        });
        return dead;
    }
    //Check if bonus points should be assigned
    verifyBonusPoints () {
        var bonusGained = false;
        this.bonus.forEach ((bonus) => {
            if (this.player.x <= bonus.x && bonus.x <= (this.player.x + 0.5*BONUS_WIDTH) && bonus.y >= (this.player.y - PLAYER_HEIGHT) && this.player.y >= bonus.y) bonusGained = true;
        });
        return bonusGained;
    }
}

// This section will start the game
var gameEngine = new Engine(document.getElementById('app'));
gameEngine.start();