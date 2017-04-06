/*global game_state*/
/*global game*/
/*global Phaser*/

game_state.story = function() {};

var counter = 0;
var text;
var player;

game_state.story.prototype = {
    
    preload: function() {
        game.load.spritesheet("dude", "assets/ninja.png", 27, 34);
    },
    
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '2d2d2d';
        
        this.text = game.add.text(20, 20, "Hello!\nI am training to be a ninja!\nHelp me get through this obstacle course!", { font: "32px Arial", fill: "#ffffff"});
        text = game.add.text(710, 550, "Next", { font: "32px Arial", fill: "#ffffff"});
        text.inputEnabled = true;
        text.events.onInputDown.add(this.down, this);
        player = game.add.sprite(400, game.world.height - 544, "dude");
        counter = 0;
    },
    
    update: function() {
        player.frame = 4;
        if (counter === 1) {
            this.text.text = "Controls\nArrow Keys - Move / Jump\nSpace - Shoot";
            text.text = "Start";
            player.kill();
        } else if (counter === 2) {
            game.state.start("main");
        }
    },

    down: function() {
        counter++;
    }
    
};

game.state.add("story", game_state.story);
game.state.start("story");