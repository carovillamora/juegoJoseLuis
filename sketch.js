function preload(){
  humanoImg = loadImage("soldado.gif");
}

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  image(humanoImg,200,300,100,100);
}
