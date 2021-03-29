
function preload(){
  pathImg = loadImage("images/Road.png");
  
}

function setup(){
  
createCanvas(1200,300);
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

}

function draw() {
  background(0);
  
  drawSprites();
  
}