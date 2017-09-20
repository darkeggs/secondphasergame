/*global Phaser*/
/*global music*/
/*global musicTwo*/
/*global musicThree*/
/*global musicFour*/

var game = new Phaser.Game(1366, 600, Phaser.AUTO, '');
var game_state = {};

game_state.main = function () {};

var player;
var enemy;
var enemyB;

var direction = "forward";
var directionB = "right";
var directionC = "right";

var bullet;
var bullets;
var bulletTime = 0;

var movingPlatform;
var win;

var music;

game_state.main.prototype = {

preload: function() {
    game.load.image("sky", "assets/sky.png");
    game.load.image("ground", "assets/platform.png");
    game.load.image("groundB", "assets/platformB.png");
    game.load.image("groundC", "assets/platformC.png");
    game.load.image("groundD", "assets/platformD.png");
    game.load.image("bullet", "assets/shuriken.png");
    game.load.image("flag", "assets/flag.png");
    game.load.spritesheet("dude", "assets/ninja.png", 27, 34);
    game.load.spritesheet("baddie", "assets/baddie.png", 32, 31.75);
    game.load.audio("music", ["assets/audio/song.mp3"]);
},

create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 10600, 600);
    
    music = game.add.audio("music");
    music.play();

    for (var i = 0; i < 14; i++) {
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
    
    for (var i = 0; i < 2; i++) {
        var groundB = this.lava.create(1200 + 800 * i, game.world.height - 64, "groundD");
        groundB.scale.setTo(2,2);
        groundB.body.immovable = true;
    }
    
    for (var i = 0; i < 1; i++) {
        var groundC = this.lava.create(4600 + 800 * i, game.world.height - 64, "groundD");
        groundC.scale.setTo(1,2);
        groundC.body.immovable = true;
    }
    
    for (var i = 0; i < 10; i++) {
        var groundD = this.lava.create(6600 + 400 * i, game.world.height - 64, "groundD");
        groundD.scale.setTo(1,2);
        groundD.body.immovable = true;
    }
    
    for (var i = 0; i < 4; i++) {
        var groundE = this.platforms.create(2800 + 400 * i, game.world.height - 64, "ground");
        groundE.scale.setTo(1, 2);
        groundE.body.immovable = true;
    }
    
        var groundF = this.platforms.create(4400, game.world.height - 64, "ground");
        groundF.scale.setTo(0.5, 2);
        groundF.body.immovable = true;
        
    for (var i = 0; i < 4; i++) {
        var groundG = this.platforms.create(5000 + 400 * i, game.world.height - 64, "ground");
        groundG.scale.setTo(1, 2);
        groundG.body.immovable = true;
    }
    
    for (var i = 1; i < 2; i++) {
        var ledgeA = this.platforms.create(400, game.world.height - (64 + 32 * i), "ground");
        ledgeA.body.immovable = true;
    }

    for (var i = 1; i < 3; i++) {
        var ledgeB = this.platforms.create(800, game.world.height - (64 + 32 * i), "ground");
        ledgeB.body.immovable = true;
    }
    
    for (var i = 0; i < 3; i++) {
        var ledgeC = this.platforms.create(1300 + 500 * i, game.world.height - 192, "ground");
        ledgeC.body.immovable = true;
    }
    
    for (var i = 0; i < 3; i++) {
        var ledgeD = this.platforms.create(2800, game.world.height - (64 + 32 * i), "ground");
        ledgeD.body.immovable = true;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledgeE = this.platforms.create(3400, game.world.height - (144 + 80 * i), "groundB");
        ledgeE.body.immovable = true;
        ledgeE.body.checkCollision.down = false;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledgeF = this.platforms.create(3800, game.world.height - (144 + 80 * i), "groundC");
        ledgeF.body.immovable = true;
        ledgeF.body.checkCollision.up = false;
    }
    
    for (var i = 0; i < 5; i++) {
        var ledgeG = this.platforms.create(4200, game.world.height - (144 + 80 * i), "groundB");
        ledgeG.body.immovable = true;
        ledgeG.body.checkCollision.down = false;
    }
    
    var ledgeH = this.platforms.create(4600, game.world.height - 464, "ground");
    ledgeH.body.immovable = true;
    
    for (var i = 0; i < 5; i++) {
        var ledgeI = this.platforms.create(5000, game.world.height - (144 + 80 * i), "groundC");
        ledgeI.body.immovable = true;
        ledgeI.body.checkCollision.up = false;
    }
    
    var ledgeJ = this.platforms.create(6200, game.world.height - 144, "groundB");
    ledgeJ.body.immovable = true;
    ledgeJ.body.checkCollision.down = false;
    
    var ledgeK = this.platforms.create(6600, game.world.height - 144, "ground");
    ledgeK.body.immovable = true;
    
    var ledgeL = this.platforms.create(6600, game.world.height - 224, "groundB");
    ledgeL.body.immovable = true;
    ledgeL.body.checkCollision.down = false;
    
    var ledgeM = this.platforms.create(7000, game.world.height - 224, "ground");
    ledgeM.body.immovable = true;
    
    var ledgeN = this.platforms.create(7000, game.world.height - 304, "groundB");
    ledgeN.body.immovable = true;
    ledgeN.body.checkCollision.down = false;
    
    var ledgeO = this.platforms.create(7400, game.world.height - 304, "ground");
    ledgeO.body.immovable = true;
    
    movingPlatform = this.platforms.create(7800, game.world.height - 304, "ground");
    movingPlatform.body.immovable = true;
    
    var ledgeP = this.platforms.create(8600, game.world.height - 304, "ground");
    ledgeP.body.immovable = true;
    
    var ledgeQ = this.platforms.create(9000, game.world.height - 304, "groundC");
    ledgeQ.body.immovable = true;
    ledgeQ.body.checkCollision.up = false;
    
    for (var i = 0; i < 2; i++) {
    var ledgeR = this.platforms.create(9000 + (i * 400), game.world.height - 224, "ground");
    ledgeR.body.immovable = true;
    }
    
    var ledgeS = this.platforms.create(9400, game.world.height - 304, "groundB");
    ledgeS.body.immovable = true;
    ledgeS.body.checkCollision.down = false;
    
    for (var i = 0; i < 2; i++) {
    var ledgeT = this.platforms.create(9800 + (i * 400), game.world.height - 304, "ground");
    ledgeT.body.immovable = true;
    }
    
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

    this.enemy = game.add.group();
    this.enemy.enableBody = true;
    
    enemy = this.enemy.create(5600, game.world.height - 92, "baddie");
    
    enemy.body.bounce.y = 0.2;
    enemy.body.gravity.y = 700;
    enemy.body.collideWorldBounds = true;
    
    enemy.animations.add("left", [0, 1], 10, true);
    enemy.animations.add("right", [2, 3], 10, true);
    
    this.enemyB = game.add.group();
    this.enemyB.enableBody = true;
    
    enemyB = this.enemyB.create(9800, game.world.height - 332, "baddie");
    
    enemyB.body.bounce.y = 0.2;
    enemyB.body.gravity.y = 700;
    enemyB.body.collideWorldBounds = true;
    
    enemyB.animations.add("left", [0, 1], 10, true);
    enemyB.animations.add("right", [2, 3], 10, true);
    
    this.win = game.add.group();
    this.win.enableBody = true;
    
    win = this.win.create(10500, game.world.height - 388, "flag");
    win.body.immovable = true;

    this.cursors = game.input.keyboard.createCursorKeys();
	this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	this.oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
	this.twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
	this.threeKey = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
	this.fourKey = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
},

update: function() {
    game.physics.arcade.collide(player, this.platforms);
    game.physics.arcade.collide(player, this.lava, this.gameOver, null);
    game.physics.arcade.collide(player, enemy, this.gameOver, null);
    game.physics.arcade.collide(player, enemyB, this.gameOver, null);
    game.physics.arcade.collide(player, this.win, this.end, null);
    game.physics.arcade.collide(enemy, this.platforms);
    game.physics.arcade.collide(enemyB, this.platforms);
    game.physics.arcade.collide(bullets, this.platforms, this.resetBullet, null);
    game.physics.arcade.collide(bullets, this.enemy, this.resetBullet, this.killEnemy, null);
    game.physics.arcade.collide(bullets, this.enemyB, this.resetBullet, this.killEnemyB, null);
    game.physics.arcade.collide(bullets, this.win, this.resetBullet, null);
    
    player.body.velocity.x = 0;
    enemy.body.velocity.x = 0;
    enemyB.body.velocity.x = 0;
    movingPlatform.body.velocity.x = 0;

    if (this.cursors.right.isDown) {
    	player.body.velocity.x = -250;
        player.animations.play("left");
        direction = "left";
    } else if (this.cursors.left.isDown) {
    	player.body.velocity.x = 250;
        player.animations.play("right");
        direction = "right";
    } else {
        player.animations.stop();
        player.frame = 4;
    }
    
    if (this.cursors.down.isDown && player.body.touching.down) {
        player.body.velocity.y = -350;
    }
    
    if (this.oneKey.isDown) {
        music.mute = true;
        game.state.start("main");
    }
    
    if (this.twoKey.isDown) {
        music.mute = true;
        game.state.start("mainTwo");
    }
    
    if (this.threeKey.isDown) {
        music.mute = true;
        game.state.start("mainThree");
    }
    
    if (this.fourKey.isDown) {
        music.mute = true;
        game.state.start("mainFour");
    }
    
    if (enemy.x >= 5600 && directionB === "left") {
        enemy.body.velocity.x = -150;
        enemy.animations.play("left");
    } else if (enemy.x <= 6000 && directionB === "right") {
        enemy.body.velocity.x = 150;
        enemy.animations.play("right");
    }
    
    if (enemy.x <= 5600) {
        directionB = "right";
    } else if (enemy.x >= 6000) {
        directionB = "left";
    }
    
    if (movingPlatform.x >= 7800 && directionC === "left") {
        movingPlatform.body.velocity.x = -150;
    } else if (movingPlatform.x <= 8200 && directionC === "right") {
        movingPlatform.body.velocity.x = 150;
    }
    
    if (movingPlatform.x <= 7800) {
        directionC = "right";
    } else if (movingPlatform.x >= 8200) {
        directionC = "left";
    }
    
    if (enemyB.x >= 9800 && directionB === "left") {
        enemyB.body.velocity.x = -150;
        enemyB.animations.play("left");
    } else if (enemyB.x <= 10200 && directionB === "right") {
        enemyB.body.velocity.x = 150;
        enemyB.animations.play("right");
    }
    
    if (enemyB.x <= 9800) {
        directionB = "right";
    } else if (enemyB.x >= 10200) {
        directionB = "left";
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

gameOver: function () {
    music.mute = true;
    game.state.start("gameOver");
},

end: function () {
    music.mute = true;
    game.state.start("mainTwo");
}

};

game.state.add("main", game_state.main);  
//game.state.start("main");