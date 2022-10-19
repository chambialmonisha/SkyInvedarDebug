
//Global variables for images
var bg, sun, s_pan, fan_anim,fan_img,display, g_house_img;
var sky,skyI;
var Boom,boomI;
var Player,playerI;
var Enemy,EnemyI;
var Enemy_2,Enemy_2I;
var Nuker,NukerI;

var score;
var Enemy_Missile;
var Enemy_2_Missile;
//Global variables for Sprites
var g_house, pan1,pan2,fan,fan2;

//Creating a ray group
var rayGroup;

//Creating temprature and voltage variables
var temp = 10
var panel1_voltage =0;
var panel2_voltage = 0;
var power_gen = 0;


function preload()
{
  
  skyI = loadImage("sky.jpg");
  boomI = loadImage("Blast.png");
  PlayerI = loadImage("F - 35.png");
  EnemyI = loadAnimation("Enemy__1.png");
  Enemy_2I = loadImage("Enemy_2.png");
  NukerI = loadImage("Nuker.png");
  Enemy_MissileI = loadImage("Enemy_1_missile.png");
  Enemy_2_MissileI = loadImage("Enemy__2__missile.png");
  sunR = loadImage("sunrays.png");
  sunL = loadImage("sunrays1.png");
  bg = loadImage("bgimage.png");
  s_pan = loadImage("s_panel.png");
 
  //fan_anim.play = false;
  fan_img = loadImage("fan01.png");
  display = loadImage("disp.png");
  g_house_img = loadImage("greenhouse.png");
  
  //Add animation for moving Fan
  fan_anim= loadAnimation("fan01.png","fan02.png","fan03.png","fan04.png","fan05.png");

  
}

function setup() 
{
  createCanvas(800,800);
  
  Boom = createSprite(400,200); 
  Boom.addImage(boomI); 
  Boom.scale = 0.2; 
  Boom.visible=false;

  Player = createSprite(400,700); 
  Player.addImage(PlayerI); 
  Player.scale = 0.5; 

  Enemy = createSprite(200,20); 
  Enemy.addAnimation("plane",EnemyI);
  Enemy.addAnimation("boom",boomI) ;
  Enemy.scale = 0.5; 
  Enemy.velocityY = 0.5; 
  Enemy.debug=true
  Enemy_2 = createSprite(100,30); 
  Enemy_2.addImage(Enemy_2I); 
  Enemy.scale = 0.5; 
  Enemy.velocityY = 0.5; 
 
  Nuker = createSprite(600,100); 
  Nuker.addImage(NukerI); 
  Nuker.scale = 0.05; 
  Nuker.velocityY = -5;
  Nuker.debug=true 

  Enemy_Missile = createSprite(200 ,20);
  Enemy_Missile.addImage(Enemy_MissileI);
  Enemy_Missile.scale = 0.05;
  Enemy_Missile.velocityY = 5;

  Enemy_2_Missile = createSprite(100,30);
  Enemy_2_Missile.addImage(Enemy_2_MissileI);
  Enemy_2_Missile.velocityY = 5;
  Enemy_2_Missile.scale = 0.05;
  
}

function draw() 
{
   //Add Images for Background & Panel
   image(skyI,0,0,width,height)
   
   if(keyDown("LEFT_ARROW"))
   {
    Player.x=Player.x-5
   }
   if(Player.x>=750)
   {
    Player.x=750
   }
   if(Player.x<=50)
   {
    Player.x=50
   }
   if(keyDown("RIGHT_ARROW"))
   {
    Player.x=Player.x+5
   }
   if(keyDown("space"))
    {
      Nuker.x = Player.x;
      Nuker.y = Player.y -40;
      Nuker.velocityY = -5;
    }
    if(Nuker.isTouching(Enemy))
   {
    Enemy.changeAnimation("boom",boomI)
    Enemy.lifetime=4
    score = score+1
   }
  
   
  power_gen = panel1_voltage + panel2_voltage
  
  push();
  noStroke();
  fill(255,255,0)
  text("Score : ",620,37)
  text(power_gen,680,37)

  text("Temprature : ",620,56)
  text(temp,710,56);
  pop();
  
  makeRay()
  drawSprites();  
}

function makeRay()
{
  
   if (frameCount % 60 === 0) 
   {
    
   }
  
}
