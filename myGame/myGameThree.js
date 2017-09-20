/*global Phaser*/
/*global game_state*/
/*global game*/
/*global music*/
/*global musicTwo*/
/*global musicThree*/
/*global musicFour*/

game_state.mainThree = function () {};

var player;

var direction = "forward";

var bullet;
var bullets;
var bulletTime = 0;

var win;

var musicThree;

game_state.mainThree.prototype = {

preload: function() {
    game.load.image("sky", "assets/sky.png");
    game.load.image("ground", "assets/platform.png");
    game.load.image("groundB", "assets/platformB.png");
    game.load.image("groundC", "assets/platformC.png");
    game.load.image("groundD", "assets/platformD.png");
    game.load.image("groundE", "assets/platformE.png");
    game.load.image("bullet", "assets/shuriken.png");
    game.load.image("flag", "assets/flag.png");
    game.load.image("block", "assets/block.png");
    game.load.image("blockB", "assets/blockB.png");
    game.load.image("blockC", "assets/blockC.png");
    game.load.image("blockD", "assets/blockD.png");
    game.load.spritesheet("dude", "assets/ninjaB.png", 27, 34);
    game.load.spritesheet("baddie", "assets/baddie.png", 32, 31.75);
    game.load.audio("musicThree", ["assets/audio/songThree.mp3"]);
},

create: function() {
	this.oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
	this.twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
	this.threeKey = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
	this.fourKey = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
	
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 12400, 600);
    
    musicThree = game.add.audio("musicThree");
    musicThree.play();

    for (var i = 0; i < 16; i++) {
        game.add.sprite(800 * i, 0, "sky");
    }
    
    this.platforms = game.add.group();
    this.platforms.enableBody = true;
    
    this.lava = game.add.group();
    this.lava.enableBody = true;
    
    for (var i = 0; i < 13; i++) {
        var ground = this.platforms.create(400 * i, game.world.height - 64, "ground");
        ground.scale.setTo(1, 2);
        ground.body.immovable = true;
    }
    
    var groundB = this.platforms.create(4864, game.world.height - 64, "ground");
    groundB.scale.setTo(1,2);
    groundB.body.immovable = true;
    
    for (var i = 0; i < 14; i++) {
        var groundC = this.lava.create(5264 + 400 * i, game.world.height - 64, "groundD");
        groundC.scale.setTo(1,2);
        groundC.body.immovable = true;
    }
    
    var groundD = this.lava.create(10664, game.world.height - 64, "groundD");
    groundD.scale.setTo(1,2);
    groundD.body.immovable = true;

    for (var i = 0; i < 4; i++) {
        var groundE = this.platforms.create(11064 + (400 * i), game.world.height - 64, "ground");
        groundE.scale.setTo(1, 2);
        groundE.body.immovable = true;
    }
    
    var ledge = this.platforms.create(400, game.world.height - 96, "ground");
    ledge.body.immovable = true;
    
    for (var i = 0; i < 2; i++) {
        var ledgeB = this.platforms.create(800, game.world.height - (96 + 32 * i), "ground");
        ledgeB.body.immovable = true;
    }
    
    for (var i = 0; i < 3; i++) {
        var ledgeC = this.platforms.create(1200, game.world.height - (96 + 32 * i), "ground");
        ledgeC.body.immovable = true;
    }
    
    for (var i = 0; i < 4; i++) {
        var ledgeD = this.platforms.create(1600, game.world.height - (96 + 32 * i), "ground");
        ledgeD.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledgeE = this.platforms.create(2000, game.world.height - (96 + 32 * i), "ground");
        ledgeE.body.immovable = true;
    }
    
    for (var i = 0; i < 4; i++) {
        var ledgeF = this.platforms.create(2400, game.world.height - (96 + 32 * i), "ground");
        ledgeF.body.immovable = true;
    }
    
    for (var i = 0; i < 3; i++) {
        var ledgeG = this.platforms.create(2800, game.world.height - (96 + 32 * i), "ground");
        ledgeG.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var ledgeH = this.platforms.create(3200, game.world.height - (96 + 32 * i), "ground");
        ledgeH.body.immovable = true;
    }
    
    var ledgeI = this.platforms.create(3600, game.world.height - 96, "ground");
    ledgeI.body.immovable = true;
    
    var ledgeJ = this.platforms.create(4768, game.world.height - 612, "groundE");
    ledgeJ.scale.setTo(1, 1.25);
    ledgeJ.body.immovable = true;
    
    var ledgeK = this.platforms.create(5232, game.world.height - 384, "groundE");
    ledgeK.body.immovable = true;
    
    for (var i = 0; i < 2; i++) {
    var ledgeL = this.platforms.create(4768, game.world.height - (144 + (160 * i)), "ground");
    ledgeL.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
    var ledgeM = this.platforms.create(4864, game.world.height - (224 + (160 * i)), "ground");
    ledgeM.body.immovable = true;
    }
    
    for (var i = 0; i < 3; i++) {
    var ledgeN = this.platforms.create(5464 + 600 * i, game.world.height - 384, "ground");
    ledgeN.body.immovable = true;
    }
    
    var ledgeO = this.platforms.create(7264, game.world.height - 304, "ground");
    ledgeO.body.immovable = true;
    
    var ledgeP = this.platforms.create(7864, game.world.height - 224, "ground");
    ledgeP.body.immovable = true;
    
    var ledgeQ = this.platforms.create(8464, game.world.height - 304, "ground");
    ledgeQ.body.immovable = true;
    
    var ledgeR = this.platforms.create(9064, game.world.height - 384, "ground");
    ledgeR.body.immovable = true;
    
    var ledgeS = this.platforms.create(9464, game.world.height - 384, "groundC");
    ledgeS.body.immovable = true;
    ledgeS.body.checkCollision.up = false;
    
    var ledgeT = this.platforms.create(9864, game.world.height - 384, "groundB");
    ledgeT.body.immovable = true;
    ledgeT.body.checkCollision.down = false;
    
    for (var i = 0; i < 3; i++) {
    var ledgeU = this.platforms.create(10664, game.world.height - 384 + (80 * i), "groundC");
    ledgeU.body.immovable = true;
    ledgeU.body.checkCollision.up = false;
    }
    
    var ledgeV = this.platforms.create(11064, game.world.height - 692, "groundE");
    ledgeV.scale.setTo(1, 1.25);
    ledgeV.body.immovable = true;
    
    for (var i = 0; i < 5; i++) {
    var ledgeW = this.platforms.create(11600, game.world.height - 464 + (80 * i), "groundB");
    ledgeW.body.immovable = true;
    ledgeW.body.checkCollision.down = false;
    }
    
    var ledgeX = this.platforms.create(12000, game.world.height - 464, "ground");
    ledgeX.body.immovable = true;
    
    this.win = game.add.group();
    this.win.enableBody = true;
    
    win = this.win.create(12300, game.world.height - 548, "flag");
    win.body.immovable = true;
    
    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(10, "bullet");
    bullets.callAll("events.onOutOfBounds.add", "events.onOutOfBounds", this.resetBullet, this);
    bullets.setAll("checkWorldBounds", true);

    player = game.add.sprite(32, game.world.height - 94, "dude");
    game.physics.arcade.enable(player);
    game.camera.follow(player);

    player.body.bounce.y = 0.2;
    player.body.gravity.y = 700;
    player.body.collideWorldBounds = true;
    
    player.animations.add("left", [0, 1, 2, 3], 10, true);
    player.animations.add("right", [5, 6, 7, 8], 10, true);

    this.cursors = game.input.keyboard.createCursorKeys();
	this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
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
    game.physics.arcade.collide(player, this.platforms);
    game.physics.arcade.collide(player, this.lava, this.gameOver, null);
    game.physics.arcade.collide(player, this.win, this.end, null);
    game.physics.arcade.collide(bullets, this.platforms, this.resetBullet, null);
    game.physics.arcade.collide(bullets, this.lava, this.resetBullet, null);
    game.physics.arcade.collide(bullets, this.win, this.resetBullet, null);

    player.body.velocity.x = 0;

    if (this.cursors.right.isDown) {
    	player.body.velocity.x = -1500;
        player.animations.play("left");
        direction = "left";
    } else if (this.cursors.left.isDown) {
    	player.body.velocity.x = 1500;
        player.animations.play("right");
        direction = "right";
    } else {
        player.animations.stop();
        player.frame = 4;
    }
    
    if (this.cursors.down.isDown && player.body.touching.down) {
        player.body.velocity.y = -350;
    }

    if (this.spaceKey.isDown) {
        this.fireBullet();
    }
},

fireBullet: function () {
    if (game.time.now > bulletTime) {
        bullet = bullets.getFirstExists(false);
        if (bullet) {
            if (direction === "left") {
                bullet.reset(player.x - 36, player.y);
                bullet.body.velocity.x = -1750;
                bulletTime = game.time.now + 250;
            } else {
                bullet.reset(player.x + 30, player.y);
                bullet.body.velocity.x = 1750;
                bulletTime = game.time.now + 250;
            }
        }
    }
},

resetBullet: function (bullet) {
    bullet.kill();
},

gameOver: function () {
    musicThree.mute = true;
    game.state.start("gameOverThree");
},

end: function () {
    musicThree.mute = true;
    game.state.start("mainFour");
}

};

game.state.add("mainThree", game_state.mainThree);  
//game.state.start("mainThree");