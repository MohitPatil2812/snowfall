var bgimage
var snowtest

function preload(){
  bgimage=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);

  createSprite(400, 200, 50, 50);
  snowtest= new Snow(200,200);
}

function draw() {
  background(bgimage); 
  snowtest.display() 
  drawSprites();
}