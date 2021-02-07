var database;
var gameState = 0;
var playerCount = 0;
var player1,player2;
var allPlayers;
var player;
var alien,alienImg;
var ground,groundImg;
var bitcoin,bitcoinImg;
var bitcoinGroup;
var alien2,alien2Img;
var alienGroup;
var score;

function preload(){
  alienImg=loadImage("images/ufo.png");
  groundImg=loadImage("images/saturn.jpg");
  bitcoinImg=loadImage("images/bitcoin.png");
  alien2Img=loadImage("images/alien.png");
}
function setup() {
  createCanvas(700,500);
 // createSprite(400, 200, 50, 50);
  
   alien=createSprite(100,100,100,100);
   alien.addImage(alienImg);
   alien.scale=0.10;

   
   //ground.velocityX=-3;
   //ground.addImage(groundImg);
   //ground.x=ground.width/2;

   score=0;

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(groundImg);  
  
   if(keyIsDown(UP_ARROW)){
    alien.y=alien.y-3;
   }

   if(keyIsDown(DOWN_ARROW)){
    alien.y=alien.y+3;
  }

  //if(alien.isTouching(bitcoinGroup)){
     // score=score+1;
 // }
  
  text("score:"+ score,300,30); 

 // if(ground.x<400){  
	 //ground.x=ground.width/2
 //}

  if(alien.isTouching(alienGroup)){
    gameState="end";
  }

  if(gameState=="end"){
   text("game Over",200,250);
   }

 spownbitcoin();
 spownalien();
  alien.display();

  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
  if (playerCount === 2) {
    game.update(1);
  }
  drawSprites();
  
}

function spownbitcoin(){

  if(World.frameCount%60===0)
  { 
  bitcoin=createSprite(600,200,60,60)
  bitcoin.scale=0.05;
  r=Math.round(random(1,500));
    bitcoin.y=r;
    bitcoin.velocityX=-3;
    bitcoin.addImage(bitcoinImg);
      //bitcoinGroup.add( bitcoin);
  }
 
}

function spownalien(){ 

  if(World.frameCount%60===0)
  { 
  alien2=createSprite(600,200,60,60)
  alien2.scale=0.05;
  r=Math.round(random(1,500));
    alien2.y=r;
    alien2.velocityX=-3;
    alien2.addImage(alien2Img);
      //bitcoinGroup.add( bitcoin);
  }
    
}