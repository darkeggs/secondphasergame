/*global Phaser*/
/*global game_state*/
/*global game*/
/*global music*/
/*global musicTwo*/
/*global musicThree*/
/*global musicFour*/

game_state.mainFour = function () {};

var player;
var movingLava;
var movingLavaB;
var movingLavaC;
var movingLavaD;
var movingLavaE;
var movingLavaF;
var movingLavaG;

var direction = "forward";
var directionB = "up";
var directionC = "down";
var directionD = "up";
var directionE = "down";
var directionF = "up";
var directionG = "up";
var directionH = "down";

var bullet;
var bullets;
var bulletTime = 0;

var win;

var musicFour;

game_state.mainFour.prototype = {

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
    game.load.image("lava", "assets/lava.png");
    game.load.spritesheet("dude", "assets/ninjaB.png", 27, 34);
    game.load.spritesheet("baddie", "assets/baddie.png", 32, 31.75);
    game.load.audio("musicFour", ["assets/audio/songFour.mp3"]);
},

create: function() {
	this.oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
	this.twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
	this.threeKey = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
	this.fourKey = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
	
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 12032, 600);
    
    musicFour = game.add.audio("musicFour");
    musicFour.play();

    for (var i = 0; i < 16; i++) {
        game.add.sprite(800 * i, 0, "sky");
    }
    
    this.platforms = game.add.group();
    this.platforms.enableBody = true;
    
    this.lava = game.add.group();
    this.lava.enableBody = true;
    
    for (var i = 0; i < 2; i++) {
        var ground = this.platforms.create(400 * i, game.world.height - 64, "ground");
        ground.scale.setTo(1, 2);
        ground.body.immovable = true;
    }
    
    for (var i = 0; i < 3; i++) {
        var groundB = this.platforms.create(1200 + (400 * i), game.world.height - 64, "ground");
        groundB.scale.setTo(1, 2);
        groundB.body.immovable = true;
    }
    
    for (var i = 0; i < 25; i++) {
        var groundC = this.lava.create(2400 + (400 * i), game.world.height - 64, "groundD");
        groundC.scale.setTo(1, 2);
        groundC.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledge = this.platforms.create(400, game.world.height - (144 + (80 * i)), "groundB");
        ledge.body.immovable = true;
        ledge.body.checkCollision.down = false;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledgeB = this.platforms.create(1200, game.world.height - (144 + (80 * i)), "groundC");
        ledgeB.body.immovable = true;
        ledgeB.body.checkCollision.up = false;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledgeC = this.platforms.create(2000, game.world.height - (144 + (80 * i)), "groundB");
        ledgeC.body.immovable = true;
        ledgeC.body.checkCollision.down = false;
    }
    
    var ledgeD = this.platforms.create(2400, game.world.height - 464, "groundC");
    ledgeD.body.immovable = true;
    ledgeD.body.checkCollision.up = false;
    
    var ledgeE = this.platforms.create(2400, game.world.height - 384, "ground");
    ledgeE.body.immovable = true;
    
    var ledgeF = this.platforms.create(2800, game.world.height - 384, "groundC");
    ledgeF.body.immovable = true;
    ledgeF.body.checkCollision.up = false;
    
    var ledgeG = this.platforms.create(2800, game.world.height - 304, "ground");
    ledgeG.body.immovable = true;
    
    var ledgeH = this.platforms.create(3200, game.world.height - 304, "groundC");
    ledgeH.body.immovable = true;
    ledgeH.body.checkCollision.up = false;
    
    var ledgeI = this.platforms.create(3200, game.world.height - 224, "ground");
    ledgeI.body.immovable = true;
    
    var ledgeJ = this.platforms.create(3600, game.world.height - 224, "groundC");
    ledgeJ.body.immovable = true;
    ledgeJ.body.checkCollision.up = false;
    
    var ledgeK = this.platforms.create(3600, game.world.height - 144, "ground");
    ledgeK.body.immovable = true;
    
    for (var i = 0; i < 5; i++) {
        var ledgeL = this.platforms.create(4000, game.world.height - (144 + (80 * i)), "groundB");
        ledgeL.body.immovable = true;
        ledgeL.body.checkCollision.down = false;
    }
    
    for (var i = 0; i < 5; i++) {
    var ledgeM = this.platforms.create(4400 + (600 * i), game.world.height - 304, "ground");
    ledgeM.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledgeN = this.platforms.create(7200, game.world.height - (144 + (80 * i)), "groundB");
        ledgeN.body.immovable = true;
        ledgeN.body.checkCollision.down = false;
    }
    
    for (var i = 0; i < 10; i++) {
        var ledgeO = this.platforms.create(7800 + (100 * i), game.world.height - 424, "block");
        ledgeO.body.immovable = true;
    }
    
    for (var i = 0; i < 10; i++) {
        var ledgeP = this.platforms.create(7800 + (100 * i), game.world.height - 344, "block");
        ledgeP.body.immovable = true;
    }
    
    for (var i = 0; i < 10; i++) {
        var ledgeQ = this.platforms.create(7800 + (100 * i), game.world.height - 264, "block");
        ledgeQ.body.immovable = true;
    }
 
    for (var i = 0; i < 10; i++) {
        var ledgeR = this.platforms.create(7800 + (100 * i), game.world.height - 184, "block");
        ledgeR.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledgeS = this.platforms.create(8800 + (100 * i), game.world.height - 424, "blockC");
        ledgeS.body.immovable = true;
        ledgeS.body.checkCollision.up = false;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledgeT = this.platforms.create(8800 + (100 * i), game.world.height - 344, "blockC");
        ledgeT.body.immovable = true;
        ledgeT.body.checkCollision.up = false;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledgeU = this.platforms.create(8800 + (100 * i), game.world.height - 264, "blockC");
        ledgeU.body.immovable = true;
        ledgeU.body.checkCollision.up = false;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledgeV = this.platforms.create(8800 + (100 * i), game.world.height - 184, "blockC");
        ledgeV.body.immovable = true;
        ledgeV.body.checkCollision.up = false;
    }
    
    for (var i = 0; i < 10; i++) {
        var ledgeW = this.platforms.create(9300 + (100 * i), game.world.height - 424, "block");
        ledgeW.body.immovable = true;
    }
    
    for (var i = 0; i < 10; i++) {
        var ledgeX = this.platforms.create(9300 + (100 * i), game.world.height - 344, "block");
        ledgeX.body.immovable = true;
    }
    
    for (var i = 0; i < 10; i++) {
        var ledgeY = this.platforms.create(9300 + (100 * i), game.world.height - 264, "block");
        ledgeY.body.immovable = true;
    }
 
    for (var i = 0; i < 10; i++) {
        var ledgeZ = this.platforms.create(9300 + (100 * i), game.world.height - 184, "block");
        ledgeZ.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledgeAA = this.platforms.create(10432, game.world.height - (144 + (80 * i)), "groundB");
        ledgeAA.body.immovable = true;
        ledgeAA.body.checkCollision.down = false;
    }
    
    for (var i = 0; i < 3; i++) {
        var ledgeAB = this.platforms.create(10832 + (400 * i), game.world.height - 304, "ground");
        ledgeAB.body.immovable = true;
    }
    
    movingLava = this.lava.create(800, game.world.height - 64, "lava");
    movingLava.body.immovable = true;
    
    movingLavaB = this.lava.create(1600, game.world.height - 1400, "lava");
    movingLavaB.body.immovable = true;
        
    movingLavaC = this.lava.create(5000, game.world.height - 64, "lava");
    movingLavaC.body.immovable = true;
    
    movingLavaD = this.lava.create(6200, game.world.height - 1400, "lava");
    movingLavaD.body.immovable = true;
    
    movingLavaE = this.lava.create(8075, game.world.height - 64, "lava");
    movingLavaE.body.immovable = true;
    
    movingLavaF = this.lava.create(9575, game.world.height - 64, "lava");
    movingLavaF.body.immovable = true;
    
    movingLavaG = this.lava.create(11232, game.world.height - 1400, "lava");
    movingLavaG.body.immovable = true;
    
    this.win = game.add.group();
    this.win.enableBody = true;
    
    win = this.win.create(11932, game.world.height - 388, "flag");
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
        game.state.start("main");
        music.mute = true;
        musicTwo.mute = true;
        musicThree.mute = true;
        musicFour.mute = true;
    }
    
    if (this.twoKey.isDown) {
        game.state.start("mainTwo");
        music.mute = true;
        musicTwo.mute = true;
        musicThree.mute = true;
        musicFour.mute = true;
    }
    
    if (this.threeKey.isDown) {
        game.state.start("mainThree");
        music.mute = true;
        musicTwo.mute = true;
        musicThree.mute = true;
        musicFour.mute = true;
    }
    
    if (this.fourKey.isDown) {
        game.state.start("mainFour");
        music.mute = true;
        musicTwo.mute = true;
        musicThree.mute = true;
        musicFour.mute = true;
    }    
    game.physics.arcade.collide(player, this.platforms);
    game.physics.arcade.collide(player, this.lava, this.gameOver, null);
    game.physics.arcade.collide(player, this.win, this.end, null);
    game.physics.arcade.collide(bullets, this.platforms, this.resetBullet, null);
    game.physics.arcade.collide(bullets, this.lava, this.resetBullet, null);
    game.physics.arcade.collide(bullets, this.win, this.resetBullet, null);
    
    movingLava.body.velocity.y = 0;
    movingLavaB.body.velocity.y = 0;
    
    if (movingLava.y >= 0 && directionB === "up") {
        movingLava.body.velocity.y = -150;
    } else if (movingLava.y <= 536 && directionB === "down") {
        movingLava.body.velocity.y = 150;
    }
    
    if (movingLava.y <= 0) {
        directionB = "down";
    } else if (movingLava.y >= 536) {
        directionB = "up";
    }
    
    if (movingLavaB.y <= -268 && directionC === "down") {
        movingLavaB.body.velocity.y = 150;
    } else if (movingLavaB.y >= -800 && directionC === "up") {
        movingLavaB.body.velocity.y = -150;
    }
    
    if (movingLavaB.y >= -268) {
        directionC = "up";
    } else if (movingLavaB.y <= -800) {
        directionC = "down";
    }
    
    if (movingLavaC.y >= 0 && directionD === "up") {
        movingLavaC.body.velocity.y = -150;
    } else if (movingLavaC.y <= 536 && directionD === "down") {
        movingLavaC.body.velocity.y = 150;
    }
    
    if (movingLavaC.y <= 0) {
        directionD = "down";
    } else if (movingLavaC.y >= 536) {
        directionD = "up";
    }
    
    if (movingLavaD.y <= -268 && directionE === "down") {
        movingLavaD.body.velocity.y = 150;
    } else if (movingLavaD.y >= -800 && directionE === "up") {
        movingLavaD.body.velocity.y = -150;
    }
    
    if (movingLavaD.y >= -268) {
        directionE = "up";
    } else if (movingLavaD.y <= -800) {
        directionE = "down";
    }
    
    if (movingLavaE.y >= 0 && directionF === "up") {
        movingLavaE.body.velocity.y = -150;
    } else if (movingLavaE.y <= 536 && directionF === "down") {
        movingLavaE.body.velocity.y = 150;
    }
    
    if (movingLavaE.y <= 0) {
        directionF = "down";
    } else if (movingLavaE.y >= 536) {
        directionF = "up";
    }

    if (movingLavaF.y >= 0 && directionG === "up") {
        movingLavaF.body.velocity.y = -150;
    } else if (movingLavaF.y <= 536 && directionG === "down") {
        movingLavaF.body.velocity.y = 150;
    }
    
    if (movingLavaF.y <= 0) {
        directionG = "down";
    } else if (movingLavaF.y >= 536) {
        directionG = "up";
    }
    
    if (movingLavaG.y <= -268 && directionH === "down") {
        movingLavaG.body.velocity.y = 150;
    } else if (movingLavaG.y >= -800 && directionH === "up") {
        movingLavaG.body.velocity.y = -150;
    }
    
    if (movingLavaG.y >= -268) {
        directionH = "up";
    } else if (movingLavaG.y <= -800) {
        directionH = "down";
    }
    
    player.body.velocity.x = 0;

    if (this.cursors.left.isDown) {
    	player.body.velocity.x = -1500;
        player.animations.play("left");
        direction = "left";
    } else if (this.cursors.right.isDown) {
    	player.body.velocity.x = 1500;
        player.animations.play("right");
        direction = "right";
    } else {
        player.animations.stop();
        player.frame = 4;
    }
    
    if (this.cursors.up.isDown && player.body.touching.down) {
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
    music.mute = true;
    musicTwo.mute = true;
    musicThree.mute = true;
    musicFour.mute = true;
    game.state.start("gameOverFour");
},

end: function () {
    music.mute = true;
    musicTwo.mute = true;
    musicThree.mute = true;
    musicFour.mute = true;
    game.state.start("end");
}

};

game.state.add("mainFour", game_state.mainFour);  
//game.state.start("mainFour");