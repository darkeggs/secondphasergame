/*global game_state*/
/*global game*/
/*global Phaser*/
/*global music*/
/*global musicTwo*/
/*global musicThree*/
/*global musicFour*/

game_state.story = function() {};

var counter = 0;
var text;
var player;

game_state.story.prototype = {
    
    preload: function() {
        game.load.spritesheet("dude", "assets/ninja.png", 27, 34);
    },
    
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '2d2d2d';
        
        this.text = game.add.text(20, 20, "Hello!\nI am training to be a ninja!\nHelp me get through this obstacle course!", { font: "32px Arial", fill: "#ffffff"});
        text = game.add.text(710, 550, "Next", { font: "32px Arial", fill: "#ffffff"});
        text.inputEnabled = true;
        text.events.onInputDown.add(this.down, this);
        player = game.add.sprite(400, game.world.height - 544, "dude");
        counter = 0;
        this.oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    	this.twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    	this.threeKey = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
    	this.fourKey = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
    },
    
    update: function() {
        music.mute = true;
        musicTwo.mute = true;
        musicThree.mute = true;
        musicFour.mute = true;    
        if (this.oneKey.isDown) {
            game.state.start("main");
            music.mute = true;
            musicTwo.mute = true;
            musicThree.mute = true;
            musicFour.mute = true;
        }
        
        if (this.twoKey.isDown) {
            game.state.start("mainTwo");
            music.mute = true;
            musicTwo.mute = true;
            musicThree.mute = true;
            musicFour.mute = true;
        }
        
        if (this.threeKey.isDown) {
            game.state.start("mainThree");
            music.mute = true;
            musicTwo.mute = true;
            musicThree.mute = true;
            musicFour.mute = true;
        }
        
        if (this.fourKey.isDown) {
            game.state.start("mainFour");
            music.mute = true;
            musicTwo.mute = true;
            musicThree.mute = true;
            musicFour.mute = true;
        }    
        player.frame = 4;
        if (counter === 1) {
            this.text.text = "Controls\nArrow Keys - Move / Jump\nSpace - Shoot\nPress 1, 2, 3, 4 to Select Level";
            text.text = "Start";
            player.kill();
        } else if (counter === 2) {
            game.state.start("main");
        }
    },

    down: function() {
        music.mute = true;
        musicTwo.mute = true;
        musicThree.mute = true;
        musicFour.mute = true;    
        counter++;
    }
    
};

game.state.add("story", game_state.story);
game.state.start("story");