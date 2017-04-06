/*global Phaser*/
/*global game_state*/
/*global game*/

game_state.end = function() {};

var counter = 0;
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
        
        text = game.add.text(710, 550, "Next", { font: "32px Arial", fill: "#ffffff"});
        text.inputEnabled = true;
        text.events.onInputDown.add(this.down, this);
        player = game.add.sprite(277, game.world.height - 544, "dude");
        counter = 0;
    },
    
    update: function() {
        player.frame = 4;
        if (counter === 1) {
            this.text.text = "Credits\nGame Design - Marcelo\nMusic from Kirby and Sonic";
            text.text = "Play Again";
            text.x = 625;
            player.kill();
        } else if (counter === 2) {
            game.state.start("story");
        }
    },
    
    down: function() {
        counter++;
    }
    
};

game.state.add("end", game_state.end);
//game.state.start("end");