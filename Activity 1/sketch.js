let stars = [];

function setup() {
  createCanvas(600, 360);
  
  for(let i = 0; i < 100; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background('#F1A646'); // main background
  
  for(let i=0; i < stars.length; i++) {
    stars[i].show();
    stars[i].update();
  }          
  
  //body of the car 
  // rect ( x, y, width, height)
  stroke(1);
  fill("#80550C");
  rect (112, 143, 168, 105, 100, 55, 55);
  fill(0);
  rect (130, 157, 60, 70, 110, 1, 5);
  rect (193, 157, 73, 70, 1, 190, 5);
  fill("#80550C");
  rect(50, 200, 300, 50, 2);
  
  // wheels 
  fill(0);
  // ellipse ( x, y, width, height)
  ellipse ( 110, 250, 50, 50);
  ellipse ( 290, 250, 50, 50);
  fill(255);
  ellipse ( 110, 250, 20, 20);
  fill(255);
  ellipse ( 290, 250, 20, 20);
  
  // headlights
  fill ("#FFF7DB");
  rect ( 50, 200, 20, 15);
  rect ( 330, 200, 20, 15);
  
  // door handle
  fill(0);
  rect (205, 206, 20, 4);
  rect (139, 206, 20, 4);
  
  // taillights
  fill ( 255, 0, 0);
  rect ( 50, 212, 20, 10);
  rect ( 330, 212, 20, 10);
}

class Star { // to create the star
  
  constructor() {
    this.x = random (width);
    this.y = random (height);
    this.size = random(1, 8);
    this.speed = random(1, 4);
  }
  
  show() {
    noStroke();
    fill(0);
    rect(this.x, this.y, this.size);
  }
  
  update(){ // stars movement
    this.x -= this.speed;
    // to loop the stars on the screen
    if(this.x < -this.size) {
      this.x = width + this.size;
      this.y = random (height);
    }
  }
}