/*global Phaser*/
/*global game_state*/
/*global game*/
/*global music*/
/*global musicTwo*/
/*global musicThree*/
/*global musicFour*/

game_state.gameOverThree = function() {};
game_state.gameOverThree.prototype = {

preload: function() {
},

create: function() {
	this.oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
	this.twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
	this.threeKey = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
	this.fourKey = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
	
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.stage.backgroundColor = '#2d2d2d';
    
    this.text = game.add.text(300, 250, "GAME OVER", { font: "32px Arial", fill: "#ffffff", align: "center" });
    var text = game.add.text(340, 325, "RETRY", { font: "32px Arial", fill: "#ffffff", align: "center" });
    
    text.inputEnabled = true;
    text.events.onInputDown.add(this.down, this);
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
},

down: function() {
    music.mute = true;
    musicTwo.mute = true;
    musicThree.mute = true;
    musicFour.mute = true;
    game.state.start("mainThree");
}

};

game.state.add("gameOverThree", game_state.gameOverThree);
//game.state.start("gameOverThree");