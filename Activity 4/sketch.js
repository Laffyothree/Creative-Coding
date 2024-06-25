var squares = [];

function setup() {
  createCanvas(600, 600);
  background(250);
  rectMode(CENTER);
  colorMode(RGB, 241, 168, 70); 
  
    var overlapping = false;
    var protection = 0;
  
   while (squares.length < 420) {
    var square = {
      x: random(height),
      y: random(width),
      r: random(8, 21)
    };
     
    var overlapping = false;
    
    for (var j = 0; j < squares.length; j++) {
      var other = squares[j];
      var d = dist(square.x, square.y, other.x, other.y);
      if (d < square.r + other.r) {
        overlapping = true;
        break;
      }
    }
    
    if (!overlapping){
      squares.push(square);
    }
     
     protection++;
     if (protection > 10000) {
       break;
     }
  }
  
  for (var i = 0; i < squares.length; i++) {
    fill(random(420), 70, 5);
    noStroke();
    rect(squares[i].x, squares[i].y, squares[i].r*2, squares[i].r*2);
  }
  
}

function draw() {
  
}