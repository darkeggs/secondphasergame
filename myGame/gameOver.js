/*global Phaser*/
/*global game_state*/
/*global game*/
/*global music*/

game_state.gameOver = function() {};
game_state.gameOver.prototype = {

preload: function() {
},

create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.stage.backgroundColor = '#2d2d2d';
    
    this.text = game.add.text(575, 250, "GAME OVER", { font: "32px Arial", fill: "#ffffff", align: "center" });
    var text = game.add.text(615, 325, "RETRY", { font: "32px Arial", fill: "#ffffff", align: "center" });
    
    text.inputEnabled = true;
    text.events.onInputDown.add(this.down, this);
},

update: function() {
    music.mute = true;
},

down: function() {
    music.mute = true;
    game.state.start("main");
}

};

game.state.add("gameOver", game_state.gameOver);
//game.state.start("gameOver");