let bg;
var font;

function preload() {
  font = loadFont("CabalBold-78yP.ttf");
  bg = loadImage("BG.jpg");
}

var points;

function setup() {
  createCanvas(1250, 420);
  background(bg);
  fill(76, 55, 15);
  noStroke();
  
  points = font.textToPoints('Bath Spa University', 35, 240, 100, { 
    sampleFactor: 3 });
  
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    ellipse(p.x, p.y, random(1, 11), random(1, 8)); 
 }
}