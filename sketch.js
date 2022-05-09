let ground;
let lander;
var lander_img;
var bg_img;
var thrusting;
var thrust



var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  thrusting= loadAnimation("normal1.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.addAnimation(thrusting);
  lander.scale = 0.4

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  textSize(30);
  fill("black");
  text("Vertical Velocity: "+round(vy),1175,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    upward_thrust();
    thrust.nextFrame();
  }

  
}

function upward_thrust(){
  vy= -1;
}
