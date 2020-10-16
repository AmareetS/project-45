var p1, p1_image;
var bg, bg_image, invisibleGround;
var option_1, option_2;
var rockGroup, rock, rock_image;
var score;
var play = 1;
var end = 0;
var gamestate = play;
var gameover, restart,gameover_img,restart_img;

function preload(){
  p1_image = loadImage("person.png");
  bg_image = loadImage("JungleBackground.png") ;
  rock_image = loadImage("rock.png");
  gameover_img=loadImage("gameOver.png");
  restart_img=loadImage("restart.png");
}

function setup() {
  createCanvas(600, 200);
  
  bg = createSprite(300,100,3000,200);
  bg.scale = 2;
  bg.addImage("backGround",bg_image);
  bg.x = bg.width /2;
  bg.velocityX = -4;
  
  p1 = createSprite(50,180,20,50);
  p1.addAnimation("person", p1_image);
  p1.scale = 0.3;

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  rockGroup = new Group();  
  score = 0;
  
 // gameover=createSprite(300,50,5,5);
 // gameover.addImage(gameover_img);
 // gameover.visible=false;
 // restart=createSprite(300,100,5,5);
 // restart.addImage(restart_img);
 // restart.scale=0.5;
 // restart.visible=false;
}

function draw() {
  background(0);
 // if(gamestate===play){
  score = score + Math.round(getFrameRate()/60);
  text("Score: "+ score, 500,50);
  
  if(keyDown("space")) {
    p1.x = p1.x+2;
  }
  

  
  if (bg.x < 280){
    bg.x = bg.width/2;
  }
  
  p1.collide(invisibleGround);
 // spawnClouds();
 // spawnObstacles();
 /*  if(obstaclesGroup.isTouching(trex)){
   gamestate=end;
     
   }
  } 
    else if(gamestate===end){
    gameover.visible=true;
    restart.visible=true;  
    trex.velocityY=0;
    ground.velocityX=0;
    obstaclesGroup.setvelocityX=0;
    cloudsGroup.setvelocityX=0;
    trex.changeAnimation("collided",trex_collided);
    obstaclesGroup.setLifetimeEach(-1);  
    cloudsGroup.setLifetimeEach(-1);
    }
    if(mousePressedOver(restart)){
    reset();
    }
  */
  drawSprites();
}
/*
function reset(){ 
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();  
  trex.changeAnimation("running",trex_running);
  score = 0; }

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
*/