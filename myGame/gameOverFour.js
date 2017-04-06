/*global Phaser*/
/*global game_state*/
/*global game*/
/*global musicFour*/

game_state.gameOverFour = function() {};
game_state.gameOverFour.prototype = {

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
    musicFour.mute = true;
},

down: function() {
    musicFour.mute = true;
    game.state.start("mainFour");
}

};

game.state.add("gameOverFour", game_state.gameOverFour);
//game.state.start("gameOverFour");