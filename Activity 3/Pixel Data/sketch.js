var img, x, y;
function preload() {
img = loadImage("chorme.jpg");
}

function setup() {
createCanvas(465, 465);
background(0);
noStroke();
}

function draw() {
background(0);
x = mouseX;
y = mouseY;
image(img, 0, 0);
var c = get(x, y);
fill(c);
stroke(30);
rect(x, y, 50, 50);
}