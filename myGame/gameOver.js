/*global Phaser*/
/*global game_state*/
/*global game*/
/*global music*/
/*global musicTwo*/
/*global musicThree*/
/*global musicFour*/

game_state.gameOver = function() {};
game_state.gameOver.prototype = {

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
        music.mute = true;
        game.state.start("main");
    }
    
    if (this.twoKey.isDown) {
        music.mute = true;
        game.state.start("mainTwo");
    }
    
    if (this.threeKey.isDown) {
        music.mute = true;
        game.state.start("mainThree");
    }
    
    if (this.fourKey.isDown) {
        music.mute = true;
        game.state.start("mainFour");
    }
},

down: function() {
    music.mute = true;
    game.state.start("main");
}

};

game.state.add("gameOver", game_state.gameOver);
//game.state.start("gameOver");