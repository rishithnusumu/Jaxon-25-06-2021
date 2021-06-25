var road 
var roadimage
var runner
var runnerimg
var b1
var b2
//

function preload(){
  //pre-load images
  roadimage = loadImage("path.png");
  runnerimg = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200,200,20,400);
  road.addImage(roadimage);
  road.velocityY = 10
  //
  runner = createSprite(200,180,20,20);
  runner.addAnimation("R1",runnerimg);
  runner.scale = 0.05

 b1 = createSprite(10,200,10,400);
 b1.visible = false

 b2 = createSprite(380,200,10,400);
 b2.visible = false

}

function draw() {



  //keep this first
  background(0);
  //
  if(road.y > 400){
    road.y = height/2;
  }
  //
  if (keyDown("LEFT")){
    runner.x = runner.x - 10

  
  }
  if (keyDown("RIGHT")){
    runner.x = runner.x + 10

  
  }
  //
  runner.bounceOff(b1);
  runner.bounceOff(b2)


  drawSprites();

}
