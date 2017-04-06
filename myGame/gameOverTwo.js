/*global Phaser*/
/*global game_state*/
/*global game*/
/*global musicTwo*/

game_state.gameOverTwo = function() {};
game_state.gameOverTwo.prototype = {

preload: function() {
},

create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.stage.backgroundColor = '#2d2d2d';
    
    this.text = game.add.text(300, 250, "GAME OVER", { font: "32px Arial", fill: "#ffffff", align: "center" });
    var text = game.add.text(340, 325, "RETRY", { font: "32px Arial", fill: "#ffffff", align: "center" });
    
    text.inputEnabled = true;
    text.events.onInputDown.add(this.down, this);
},

update: function() {
    musicTwo.mute = true;
},

down: function() {
    musicTwo.mute = true;
    game.state.start("mainTwo");
}

};

game.state.add("gameOverTwo", game_state.gameOverTwo);
//game.state.start("gameOverTwo");