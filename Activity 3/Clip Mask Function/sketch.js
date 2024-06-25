let drake;

function preload() {
  drake = loadImage("Drake.jpg");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(252, 222, 172);
  
  let mainLayer = createGraphics(500, 500);
  drake.resize(500, 500);
  
  mainLayer.circle(250, 250, 420);
  drake.mask(mainLayer);
  image(drake, 1, 0);
}
