/*global Phaser*/
/*global game_state*/
/*global game*/
/*global music*/
/*global musicTwo*/
/*global musicThree*/
/*global musicFour*/

game_state.gameOverTwo = function() {};
game_state.gameOverTwo.prototype = {

preload: function() {
},

create: function() {
	this.oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
	this.twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
	this.threeKey = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
	this.fourKey = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
	
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.stage.backgroundColor = '#2d2d2d';
    
    this.text = game.add.text(575, 250, "GAME OVER", { font: "32px Arial", fill: "#ffffff", align: "center" });
    var text = game.add.text(615, 325, "RETRY", { font: "32px Arial", fill: "#ffffff", align: "center" });
    
    text.inputEnabled = true;
    text.events.onInputDown.add(this.down, this);
},

update: function() {
    if (this.oneKey.isDown) {
        musicTwo.mute = true;
        game.state.start("main");
    }
    
    if (this.twoKey.isDown) {
        musicTwo.mute = true;
        game.state.start("mainTwo");
    }
    
    if (this.threeKey.isDown) {
        musicTwo.mute = true;
        game.state.start("mainThree");
    }
    
    if (this.fourKey.isDown) {
        musicTwo.mute = true;
        game.state.start("mainFour");
    }    
},

down: function() {
    musicTwo.mute = true;
    game.state.start("mainTwo");
}

};

game.state.add("gameOverTwo", game_state.gameOverTwo);
//game.state.start("gameOverTwo");