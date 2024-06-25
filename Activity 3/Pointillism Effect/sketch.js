var img, x, y;
function preload() {
img = loadImage("stussy.jpg");
}

function setup() {
createCanvas(1130, 1130);
background(0);
noStroke();
}

function draw() {
x = random(width);
y = random(height);
var c = img.get(x, y);
fill(c[0], c[1], c[2], c[3], c[4], 8000);
rect(x, y, 50, 50);
}