let bg;

function preload() {
  bg = loadImage("clouds.jpg");
}

function setup() {
  colorMode(HSB, 360, 100, 100);
  createCanvas(1000, 700);
  background(bg);
  
}

function draw() {
  if (mouseIsPressed) {
    let hueValue = (frameCount % 360);
    
    let rndmColor = color(hueValue, 100, 100);
    stroke(rndmColor);
    
    let rndmSize = random(19, 40);
    strokeWeight(rndmSize);
    translate(mouseX, mouseY);
    point(0, 0);
  }
}
