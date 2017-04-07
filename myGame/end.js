/*global Phaser*/
/*global game_state*/
/*global game*/
/*global music*/
/*global musicTwo*/
/*global musicThree*/
/*global musicFour*/

game_state.end = function() {};

var text;
var player;

game_state.end.prototype = {
    
    preload: function() {
        game.load.spritesheet("dude", "assets/ninja.png", 27, 34);
    },
    
    create: function() {
        this.oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    	this.twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    	this.threeKey = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
    	this.fourKey = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);    
    	
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '2d2d2d';
        
        this.text = game.add.text(20, 20, "Thank you for your help!\nI am now a ninja!", { font: "32px Arial", fill: "#ffffff"});
        
        text = game.add.text(630, 550, "Play Again", { font: "32px Arial", fill: "#ffffff"});
        text.inputEnabled = true;
        text.events.onInputDown.add(this.down, this);
        player = game.add.sprite(277, game.world.height - 544, "dude");
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
    },
    
    down: function() {
        music.mute = true;
        musicTwo.mute = true;
        musicThree.mute = true;
        musicFour.mute = true;    
        game.state.start("story");
    }
    
};

game.state.add("end", game_state.end);
//game.state.start("end");