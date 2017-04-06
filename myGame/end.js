/*global Phaser*/
/*global game_state*/
/*global game*/

game_state.end = function() {};

var text;
var player;

game_state.end.prototype = {
    
    preload: function() {
        game.load.spritesheet("dude", "assets/ninja.png", 27, 34);
    },
    
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '2d2d2d';
        
        this.text = game.add.text(20, 20, "Thank you for your help!\nI am now a ninja!", { font: "32px Arial", fill: "#ffffff"});
        
        text = game.add.text(630, 550, "Play Again", { font: "32px Arial", fill: "#ffffff"});
        text.inputEnabled = true;
        text.events.onInputDown.add(this.down, this);
        player = game.add.sprite(277, game.world.height - 544, "dude");
    },
    
    update: function() {
        player.frame = 4;
    },
    
    down: function() {
        game.state.start("story");
    }
    
};

game.state.add("end", game_state.end);
//game.state.start("end");