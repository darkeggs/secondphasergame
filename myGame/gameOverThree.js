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
    
    this.text = game.add.text(575, 250, "GAME OVER", { font: "32px Arial", fill: "#ffffff", align: "center" });
    var text = game.add.text(615, 325, "RETRY", { font: "32px Arial", fill: "#ffffff", align: "center" });
    
    text.inputEnabled = true;
    text.events.onInputDown.add(this.down, this);
},

update: function() {
    if (this.oneKey.isDown) {
        musicThree.mute = true;
        game.state.start("main");
    }
    
    if (this.twoKey.isDown) {
        musicThree.mute = true;
        game.state.start("mainTwo");
    }
    
    if (this.threeKey.isDown) {
        musicThree.mute = true;
        game.state.start("mainThree");
    }
    
    if (this.fourKey.isDown) {
        musicThree.mute = true;
        game.state.start("mainFour");
    }    
},

down: function() {
    musicThree.mute = true;
    game.state.start("mainThree");
}

};

game.state.add("gameOverThree", game_state.gameOverThree);
//game.state.start("gameOverThree");