let photo;
let mainLayer;

function preload() {
  photo = loadImage('Drake.jpg');
}
function setup() {
  createCanvas(500, 500);
  mainLayer = createGraphics(width, height);
  mainLayer.textSize(120);
  mainLayer.textAlign(CENTER, CENTER);
  
  mainLayer.text('G O A T', width/2, height/1.90);
  mainLayer.text('G O A T', 250, 89);
  mainLayer.text('G O A T', 250, 350);
  mainLayer.text('G O A T', 250, 176);
  mainLayer.text('G O A T', 250, 437);
  
  photo.mask(mainLayer);
}

function draw() {
  background(252, 222, 172);
  image(photo, 0, 0, width, height);

}