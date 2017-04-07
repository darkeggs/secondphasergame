/*global Phaser*/
/*global game_state*/
/*global game*/
/*global music*/
/*global musicTwo*/
/*global musicThree*/
/*global musicFour*/

game_state.mainTwo = function () {};

var player;

var direction = "forward";
var directionB = "up";
var directionC = "up";
var directionD = "up";
var directionE = "right";
var directionF = "right";
var directionG = "right";
var directionH = "right";
var directionI = "right";

var bullet;
var bullets;
var bulletTime = 0;

var movingPlatform;
var movingPlatformB;
var movingPlatformC;

var win;

var enemy;
var enemyB;
var enemyC;
var enemyD;
var enemyE;

var musicTwo;

game_state.mainTwo.prototype = {

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
    game.load.spritesheet("dude", "assets/ninja.png", 27, 34);
    game.load.spritesheet("baddie", "assets/baddie.png", 32, 31.75);
    game.load.audio("musicTwo", ["assets/audio/songTwo.mp3"]);
},

create: function() {
    this.oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
	this.twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
	this.threeKey = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
	this.fourKey = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
	
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 7200, 600);
    
    musicTwo = game.add.audio("musicTwo");
    musicTwo.play();

    for (var i = 0; i < 9; i++) {
        game.add.sprite(800 * i, 0, "sky");
    }
    
    this.platforms = game.add.group();
    this.platforms.enableBody = true;
    
    this.lava = game.add.group();
    this.lava.enableBody = true;
    
    for (var i = 0; i < 3; i++) {
        var ground = this.platforms.create(400 * i, game.world.height - 64, "ground");
        ground.scale.setTo(1, 2);
        ground.body.immovable = true;
    }
    
    for (var i = 0; i < 3; i++) {
        var groundB = this.platforms.create(6400 + 400 * i, game.world.height - 64, "ground");
        groundB.scale.setTo(1, 2);
        groundB.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var ledge = this.platforms.create(300 * i, game.world.height - 544, "ground");
        ledge.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var ledgeB = this.platforms.create(100 + 300 * i, game.world.height - 464, "ground");
        ledgeB.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var ledgeC = this.platforms.create(300 * i, game.world.height - 384, "ground");
        ledgeC.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var ledgeD = this.platforms.create(100 + 300 * i, game.world.height - 304, "ground");
        ledgeD.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var ledgeE = this.platforms.create(300 * i, game.world.height - 224, "ground");
        ledgeE.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var ledgeF = this.platforms.create(100 + 300 * i, game.world.height - 144, "ground");
        ledgeF.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var ledgeG = this.platforms.create(770, 88 * i, "groundE");
        ledgeG.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var block = this.platforms.create(2650 + 100 * i, game.world.height - 464, "block");
        block.body.immovable = true;
    }
    
    for (var i = 0; i < 10; i++) {
        var blockB = this.platforms.create(2700 + 100 * i, game.world.height - 384, "block");
        blockB.body.immovable = true;
    }
    
    for (var i = 0; i < 11; i++) {
        var blockC = this.platforms.create(2650 + 100 * i, game.world.height - 304, "block");
        blockC.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockD = this.platforms.create(2700 + 100 * i, game.world.height - 224, "block");
        blockD.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockE = this.lava.create(3150 + 100 * i, game.world.height - 464, "blockD");
        blockE.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockF = this.lava.create(3200 + 100 * i, game.world.height - 224, "blockD");
        blockF.body.immovable = true;
    }
    
    for (var i = 0; i < 8; i++) {
        var blockG = this.platforms.create(3650 + 100 * i, game.world.height - 464, "block");
        blockG.body.immovable = true;
    }
    
    for (var i = 0; i < 7; i++) {
        var blockH = this.platforms.create(3700 + 100 * i, game.world.height - 224, "block");
        blockH.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockI = this.lava.create(3700 + 100 * i, game.world.height - 384, "blockD");
        blockI.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockJ = this.lava.create(3750 + 100 * i, game.world.height - 304, "blockD");
        blockJ.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var blockK = this.platforms.create(4200 + 100 * i, game.world.height - 384, "block");
        blockK.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var blockL = this.platforms.create(4250 + 100 * i, game.world.height - 304, "block");
        blockL.body.immovable = true;
    }
    
    var blockM = this.platforms.create(4450, game.world.height - 464, "blockC");
    blockM.body.immovable = true;
    blockM.body.checkCollision.up = false;
    
    var blockN = this.platforms.create(4400, game.world.height - 384, "blockC");
    blockN.body.immovable = true;
    blockN.body.checkCollision.up = false;
    
    var blockO = this.platforms.create(4450, game.world.height - 304, "blockC");
    blockO.body.immovable = true;
    blockO.body.checkCollision.up = false;
    
    var blockP = this.platforms.create(4400, game.world.height - 224, "blockC");
    blockP.body.immovable = true;
    blockP.body.checkCollision.up = false;
    
    for (var i = 0; i < 2; i++) {
        var blockQ = this.platforms.create(4550 + 100 * i, game.world.height - 464, "block");
        blockQ.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var blockR = this.platforms.create(4500 + 100 * i, game.world.height - 384, "block");
        blockR.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var blockS = this.platforms.create(4550 + 100 * i, game.world.height - 304, "block");
        blockS.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var blockT = this.platforms.create(4500 + 100 * i, game.world.height - 224, "block");
        blockT.body.immovable = true;
    }
    
    var blockU = this.platforms.create(4750, game.world.height - 464, "blockC");
    blockU.body.immovable = true;
    blockU.body.checkCollision.up = false;
    
    var blockV = this.platforms.create(4700, game.world.height - 384, "blockC");
    blockV.body.immovable = true;
    blockV.body.checkCollision.up = false;
    
    var blockW = this.platforms.create(4750, game.world.height - 304, "blockC");
    blockW.body.immovable = true;
    blockW.body.checkCollision.up = false;
    
    var blockX = this.platforms.create(4700, game.world.height - 224, "blockC");
    blockX.body.immovable = true;
    blockX.body.checkCollision.up = false;
    
    for (var i = 0; i < 2; i++) {
        var blockY = this.platforms.create(4850 + 100 * i, game.world.height - 464, "block");
        blockY.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var blockZ = this.platforms.create(4800 + 100 * i, game.world.height - 384, "block");
        blockZ.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var blockAA = this.platforms.create(4850 + 100 * i, game.world.height - 304, "block");
        blockAA.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var blockAB = this.platforms.create(4800 + 100 * i, game.world.height - 224, "block");
        blockAB.body.immovable = true;
    }
    
    var blockAC = this.platforms.create(5050, game.world.height - 464, "blockC");
    blockAC.body.immovable = true;
    blockAC.body.checkCollision.up = false;
    
    var blockAD = this.platforms.create(5000, game.world.height - 384, "blockC");
    blockAD.body.immovable = true;
    blockAD.body.checkCollision.up = false;
    
    var blockAE = this.platforms.create(5050, game.world.height - 304, "blockC");
    blockAE.body.immovable = true;
    blockAE.body.checkCollision.up = false;
    
    var blockAF = this.platforms.create(5000, game.world.height - 224, "blockC");
    blockAF.body.immovable = true;
    blockAF.body.checkCollision.up = false;
    
    for (var i = 0; i < 2; i++) {
        var blockAG = this.platforms.create(5150 + 100 * i, game.world.height - 464, "block");
        blockAG.body.immovable = true;
    }
    
    for (var i = 0; i < 3; i++) {
        var blockAH = this.platforms.create(5100 + 100 * i, game.world.height - 384, "block");
        blockAH.body.immovable = true;
    }
    
    for (var i = 0; i < 2; i++) {
        var blockAI = this.platforms.create(5150 + 100 * i, game.world.height - 304, "block");
        blockAI.body.immovable = true;
    }
    
    for (var i = 0; i < 3; i++) {
        var blockAJ = this.platforms.create(5100 + 100 * i, game.world.height - 224, "block");
        blockAJ.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockAK = this.lava.create(5350 + 200 * i, game.world.height - 464, "blockD");
        blockAK.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockAL = this.lava.create(5500 + 200 * i, game.world.height - 384, "blockD");
        blockAL.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockAM = this.lava.create(5350 + 200 * i, game.world.height - 304, "blockD");
        blockAM.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockAN = this.lava.create(5500 + 200 * i, game.world.height - 224, "blockD");
        blockAN.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockAO = this.platforms.create(5450 + 200 * i, game.world.height - 464, "blockB");
        blockAO.body.immovable = true;
        blockAO.body.checkCollision.down = false;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockAP = this.platforms.create(5400 + 200 * i, game.world.height - 384, "blockB");
        blockAP.body.immovable = true;
        blockAP.body.checkCollision.down = false;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockAQ = this.platforms.create(5450 + 200 * i, game.world.height - 304, "blockB");
        blockAQ.body.immovable = true;
        blockAQ.body.checkCollision.down = false;
    }
    
    for (var i = 0; i < 5; i++) {
        var blockAR = this.platforms.create(5400 + 200 * i, game.world.height - 224, "blockB");
        blockAR.body.immovable = true;
        blockAR.body.checkCollision.down = false;
    }
    
    for (var i = 0; i < 13; i++) {
        var groundC = this.lava.create(1200 + 400 * i, game.world.height - 64, "groundD");
        groundC.scale.setTo(1,2);
        groundC.body.immovable = true;
    }
    
    movingPlatform = this.platforms.create(1200, game.world.height - 96, "ground");
    movingPlatform.body.immovable = true;
    
    movingPlatformB = this.platforms.create(1700, game.world.height/2, "ground");
    movingPlatformB.body.immovable = true;
    
    movingPlatformC = this.platforms.create(2200, game.world.height - 96, "ground");
    movingPlatformC.body.immovable = true;
    
    this.win = game.add.group();
    this.win.enableBody = true;
    
    win = this.win.create(7100, game.world.height - 148, "flag");
    win.body.immovable = true;
    
    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(10, "bullet");
    bullets.callAll("events.onOutOfBounds.add", "events.onOutOfBounds", this.resetBullet, this);
    bullets.setAll("checkWorldBounds", true);

    player = game.add.sprite(32, game.world.height - 576, "dude");
    game.physics.arcade.enable(player);
    game.camera.follow(player);

    player.body.bounce.y = 0.2;
    player.body.gravity.y = 700;
    player.body.collideWorldBounds = true;
    
    player.animations.add("left", [0, 1, 2, 3], 10, true);
    player.animations.add("right", [5, 6, 7, 8], 10, true);
    
    this.enemy = game.add.group();
    this.enemy.enableBody = true;
    
    enemy = this.enemy.create(130, game.world.height - 492, "baddie");
    
    enemy.body.bounce.y = 0.2;
    enemy.body.gravity.y = 700;
    enemy.body.collideWorldBounds = true;
    
    enemy.animations.add("left", [0, 1], 10, true);
    enemy.animations.add("right", [2, 3], 10, true);
    
    this.enemyB = game.add.group();
    this.enemyB.enableBody = true;
    
    enemyB = this.enemyB.create(130, game.world.height - 412, "baddie");
    
    enemyB.body.bounce.y = 0.2;
    enemyB.body.gravity.y = 700;
    enemyB.body.collideWorldBounds = true;
    
    enemyB.animations.add("left", [0, 1], 10, true);
    enemyB.animations.add("right", [2, 3], 10, true);
    
    this.enemyC = game.add.group();
    this.enemyC.enableBody = true;
    
    enemyC = this.enemyC.create(130, game.world.height - 332, "baddie");
    
    enemyC.body.bounce.y = 0.2;
    enemyC.body.gravity.y = 700;
    enemyC.body.collideWorldBounds = true;
    
    enemyC.animations.add("left", [0, 1], 10, true);
    enemyC.animations.add("right", [2, 3], 10, true);
    
    this.enemyD = game.add.group();
    this.enemyD.enableBody = true;
    
    enemyD = this.enemyD.create(130, game.world.height - 252, "baddie");
    
    enemyD.body.bounce.y = 0.2;
    enemyD.body.gravity.y = 700;
    enemyD.body.collideWorldBounds = true;
    
    enemyD.animations.add("left", [0, 1], 10, true);
    enemyD.animations.add("right", [2, 3], 10, true);
    
    this.enemyE = game.add.group();
    this.enemyE.enableBody = true;
    
    enemyE = this.enemyE.create(130, game.world.height - 172, "baddie");
    
    enemyE.body.bounce.y = 0.2;
    enemyE.body.gravity.y = 700;
    enemyE.body.collideWorldBounds = true;
    
    enemyE.animations.add("left", [0, 1], 10, true);
    enemyE.animations.add("right", [2, 3], 10, true);

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
    game.physics.arcade.collide(player, enemy, this.gameOver, null);
    game.physics.arcade.collide(player, enemyB, this.gameOver, null);
    game.physics.arcade.collide(player, enemyC, this.gameOver, null);
    game.physics.arcade.collide(player, enemyD, this.gameOver, null);
    game.physics.arcade.collide(player, enemyE, this.gameOver, null);
    game.physics.arcade.collide(player, this.win, this.end, null);
    game.physics.arcade.collide(bullets, this.platforms, this.resetBullet, null);
    game.physics.arcade.collide(bullets, this.lava, this.resetBullet, null);
    game.physics.arcade.collide(enemy, this.platforms);
    game.physics.arcade.collide(enemyB, this.platforms);
    game.physics.arcade.collide(enemyC, this.platforms);
    game.physics.arcade.collide(enemyD, this.platforms);
    game.physics.arcade.collide(enemyE, this.platforms);
    game.physics.arcade.collide(bullets, this.enemy, this.resetBullet, this.killEnemy, null);
    game.physics.arcade.collide(bullets, this.enemyB, this.resetBullet, this.killEnemyB, null);
    game.physics.arcade.collide(bullets, this.enemyC, this.resetBullet, this.killEnemyC, null);
    game.physics.arcade.collide(bullets, this.enemyD, this.resetBullet, this.killEnemyD, null);
    game.physics.arcade.collide(bullets, this.enemyE, this.resetBullet, this.killEnemyE, null);
    game.physics.arcade.collide(bullets, this.win, this.resetBullet, null);

    player.body.velocity.x = 0;

    if (this.cursors.left.isDown) {
    	player.body.velocity.x = -250;
        player.animations.play("left");
        direction = "left";
    } else if (this.cursors.right.isDown) {
    	player.body.velocity.x = 250;
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
    
    movingPlatform.body.velocity.y = 0;
    
    if (movingPlatform.y >= 60 && directionB === "up") {
        movingPlatform.body.velocity.y = -150;
    } else if (movingPlatform.y <= 504 && directionB === "down") {
        movingPlatform.body.velocity.y = 150;
    }
    
    if (movingPlatform.y <= 60) {
        directionB = "down";
    } else if (movingPlatform.y >= 504) {
        directionB = "up";
    }
    
    movingPlatformB.body.velocity.y = 0;

    if (movingPlatformB.y >= 60 && directionC === "up") {
        movingPlatformB.body.velocity.y = -150;
    } else if (movingPlatformB.y <= 504 && directionC === "down") {
        movingPlatformB.body.velocity.y = 150;
    }
    
    if (movingPlatformB.y <= 60) {
        directionC = "down";
    } else if (movingPlatformB.y >= 504) {
        directionC = "up";
    }
    
    movingPlatformC.body.velocity.y = 0;

    if (movingPlatformC.y >= 60 && directionD === "up") {
        movingPlatformC.body.velocity.y = -150;
    } else if (movingPlatformC.y <= 504 && directionD === "down") {
        movingPlatformC.body.velocity.y = 150;
    }
    
    if (movingPlatformC.y <= 60) {
        directionD = "down";
    } else if (movingPlatformC.y >= 504) {
        directionD = "up";
    }
    
    enemy.body.velocity.x = 0;
    enemyB.body.velocity.x = 0;
    enemyC.body.velocity.x = 0;
    enemyD.body.velocity.x = 0;
    enemyE.body.velocity.x = 0;
    
    if (enemy.x >= 130 && directionE === "left") {
        enemy.body.velocity.x = -150;
        enemy.animations.play("left");
    } else if (enemy.x <= 670 && directionE === "right") {
        enemy.body.velocity.x = 150;
        enemy.animations.play("right");
    }
    
    if (enemy.x <= 130) {
        directionE = "right";
    } else if (enemy.x >= 670) {
        directionE = "left";
    }
    
    if (enemyB.x >= 130 && directionF === "left") {
        enemyB.body.velocity.x = -150;
        enemyB.animations.play("left");
    } else if (enemy.x <= 670 && directionF === "right") {
        enemyB.body.velocity.x = 150;
        enemyB.animations.play("right");
    }
    
    if (enemyB.x <= 130) {
        directionF = "right";
    } else if (enemyB.x >= 670) {
        directionF = "left";
    }
    
    if (enemyC.x >= 130 && directionG === "left") {
        enemyC.body.velocity.x = -150;
        enemyC.animations.play("left");
    } else if (enemyC.x <= 670 && directionG === "right") {
        enemyC.body.velocity.x = 150;
        enemyC.animations.play("right");
    }
    
    if (enemyC.x <= 130) {
        directionG = "right";
    } else if (enemyC.x >= 670) {
        directionG = "left";
    }
    
    if (enemyD.x >= 130 && directionH === "left") {
        enemyD.body.velocity.x = -150;
        enemyD.animations.play("left");
    } else if (enemyD.x <= 670 && directionH === "right") {
        enemyD.body.velocity.x = 150;
        enemyD.animations.play("right");
    }
    
    if (enemyD.x <= 130) {
        directionH = "right";
    } else if (enemyD.x >= 670) {
        directionH = "left";
    }
    
    if (enemyE.x >= 130 && directionI === "left") {
        enemyE.body.velocity.x = -150;
        enemyE.animations.play("left");
    } else if (enemyE.x <= 670 && directionI === "right") {
        enemyE.body.velocity.x = 150;
        enemyE.animations.play("right");
    }
    
    if (enemyE.x <= 130) {
        directionI = "right";
    } else if (enemyE.x >= 670) {
        directionI = "left";
    }
},

fireBullet: function () {
    if (game.time.now > bulletTime) {
        bullet = bullets.getFirstExists(false);
        if (bullet) {
            if (direction === "left") {
                bullet.reset(player.x - 16, player.y);
                bullet.body.velocity.x = -500;
                bulletTime = game.time.now + 250;
            } else {
                bullet.reset(player.x + 9, player.y);
                bullet.body.velocity.x = 500;
                bulletTime = game.time.now + 250;
            }
        }
    }
},

resetBullet: function (bullet) {
    bullet.kill();
},

killEnemy: function () {
    enemy.kill();
},

killEnemyB: function () {
    enemyB.kill();
},

killEnemyC: function () {
    enemyC.kill();
},

killEnemyD: function () {
    enemyD.kill();
},

killEnemyE: function () {
    enemyE.kill();
},

gameOver: function () {
    music.mute = true;
    musicTwo.mute = true;
    musicThree.mute = true;
    musicFour.mute = true;
    game.state.start("gameOverTwo");
},

end: function () {
    music.mute = true;
    musicTwo.mute = true;
    musicThree.mute = true;
    musicFour.mute = true;
    game.state.start("mainThree");
}

};

game.state.add("mainTwo", game_state.mainTwo);  
//game.state.start("mainTwo");