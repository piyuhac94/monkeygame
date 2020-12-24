var monkey, monkeyrunning;
var banana, bananaImage, obstacle, obstacleImage;
var banGroup, obsGroup;
var ground;
var score = 0;
var gameOver;
var gameOverImg;

function preload() {


  monkeyrunning = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  gameOverImg = loadImage("bTOBYRov_400x400.jpg")
}



function setup() {

  createCanvas(600, 600);

  ground = createSprite(300, 574, 600, 50);
  gameOver = createSprite(300,300)
  
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;
  gameOver.scale = 0.4

  obsGroup = new Group();
  banGroup = new Group();

  monkey = createSprite(80, 530, 20, 20);
  monkey.addAnimation("moving", monkeyrunning);
  monkey.scale = 0.1
  


}


function draw() {
  background("lightblue")
  
   monkey.collide(ground);
  
  console.log(monkey.y)
  
  if (keyDown("space") && monkey.y > 518) {
    monkey.velocityY = -16;
  }
  
  if (monkey.isTouching(banGroup)){
    score = score ++
  }
  
  if (monkey.isTouching(obsGroup)){
    obsGroup.setVelocityXEach(0)
    banGroup.setVelocityXEach(0)
    obsGroup.setLifetimeEach(-1)
    banGroup.setLifetimeEach(-1)
    gameOver.visible = true;
  }

  monkey.velocityY = monkey.velocityY + 0.5;
  
  text("SCORE  "+ score, 500, 20)
   
  
   score = score + Math.round(getFrameRate() / 60)
   

  drawSprites();

  createObs();

  createban();
}
 


function createObs() {
  if (frameCount % 100 == 0) {
    var rand = Math.round(random(1, 6))
    var obs = createSprite(600, 533, 20, 20);
    obs.velocityX = -5;
    obs.scale =
      obs.scale = 0.7
    //obs.debug = true;
    obs.lifetime = 100
    var obsI =  loadImage("obstacle.png")
    
    obs.scale = 0.1;
    obsGroup.add(obs);
   

    switch (rand) {
      case 1:
        obs.addImage(obsI);
        break;
      case 2:
        obs.addImage(obsI);
        break;
      case 3:
        obs.addImage(obsI);
        break;
      case 4:
        obs.addImage(obsI);
        break;
      case 5:
        obs.addImage(obsI);
        break;
      case 6:
        obs.addImage(obsI);
        break;
      default:
        break;

    }
  }
}

function createban() {
  if (frameCount % 100 == 0) {
    var rand = Math.round(random(1, 6))
    var ban = createSprite(600, 300, 20, 20);
    ban.velocityX = -5;
    ban.scale =
      ban.scale = 0.7
    //ban.debug = true;
    ban.lifetime = 100
    var banI
    ban.scale = 0.1;
    banGroup.add(ban);
    banI = loadImage("banana.png")
    switch (rand) {
      case 1:
        ban.addImage(banI);
        break;
      case 2:
        ban.addImage(banI);
        break;
      case 3:
        ban.addImage(banI);
        break;
      case 4:
        ban.addImage(banI);
        break;
      case 5:
        ban.addImage(banI);
        break;
      case 6:
        ban.addImage(banI);
        break;
      default:
        break;

    }
  }
}