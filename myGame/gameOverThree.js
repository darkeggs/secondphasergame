/*global Phaser*/
/*global game_state*/
/*global game*/

game_state.gameOverThree = function() {};
game_state.gameOverThree.prototype = {

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
},

down: function() {
    game.state.start("mainThree");
}

};

game.state.add("gameOverThree", game_state.gameOverThree);
//game.state.start("gameOverThree");