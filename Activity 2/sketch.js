let bg;

function preload() {
  bg = loadImage("BG.jpg");
  
}

function setup() {
  createCanvas(500, 500);
  background(bg);
}

function draw() {
  
  translate (width/2, height/2.1);
  //legs
  fill('#9C27B0');
  rect(-17, 90, 30, -90, 12);
  rect(10, 40, 27, 40, 12);
  rect(-40, 40, 27, 40, 12);
  
  //head
  fill('#9C27B0');
  rect(70, -50, 26, 40, 10);
  rect(-100.2, -50, 26, 40, 10);
  fill('#9C27B0')
  rect(-51, -95, 100, 15, 1200);
  rect(-51, 32, 100, 15, 1200);
  fill('#C47ED0');
  rect(-70, -84, 136, 120, 21);
  
  //shadow
  fill('#E35CFA');
  ellipse(1, 150, 190, 14);
  
  //left eye
  fill('#03A9F4'); 
  ellipse(-25, -30, 28, 15);
  
  //right eye
  fill('#00BCD4'); 
  ellipse(21, -30, 28, 15);
  
  //mouth
  fill('#F44336'); 
  ellipse(-2, -12, 60, 5);
  
  //halo + outline
  beginShape();
  noFill();
  stroke('#3A383E');
  strokeWeight(3);
  vertex(-13, -118);
  bezierVertex(-90, -118, 90, -118, 10, -118);
  endShape();
}