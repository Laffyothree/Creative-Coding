let r = 15;
let points = 0;
let timer = 5;
let ballColor;
let restartButton;
let player;
let bg;

function preload() {
  bg = loadImage("BG.jpg");
}

function setup() {
  createCanvas(600, 400);
  ball = createVector(random(r, width - r), random(r, height - r));
  // Initialize with a random color
  ballColor = color(random(255), random(255), random(255)); 
  
  // Create the restart button and hide it initially
  restartButton = createButton('Restart');
  restartButton.position(width / 2 - 30, height / 2 + 40);
  restartButton.mousePressed(restartGame);
  restartButton.hide();
}

function draw() {
  background(bg);

  // Display points
  fill(0); // Set text color to black
  textSize(20);
  text(points, 20, 30);

  // Display the ball
  fill(ballColor); // Set the fill color to the ball color
  ellipse(ball.x, ball.y, r * 3);

  if (timer > 0 && points > 0) {
    timer -= 1 / 60;
  }

  let len = map(timer, 0, 10, 0, 200);
  fill(0); // Set the fill color to black for the timer rectangle
  rect(15, 50, 20, len);

  if (timer < 0) {
    noLoop();
    fill(0); // Set text color to black
    textAlign(CENTER);
    textSize(75);
    textFont('Courier New'); 
    text('GAME OVER', width / 2, height / 2);
    restartButton.show();
  }
}

function mousePressed() {
  // Update player position when the mouse is pressed
  player = createVector(mouseX, mouseY);
  
  let d = p5.Vector.dist(player, ball);
  
  if (d < r) {
    ball = createVector(random(r, width - r), random(r, height - r));
    // Change to a new random color
    ballColor = color(random(255), random(255), random(255)); 
    points++;
    if (points > 1) {
      timer += 0.5;
    }
  }
}

function restartGame() {
  points = 0;
  timer = 5;
  ball = createVector(random(r, width - r), random(r, height - r));
  // Reset to a new random color
  ballColor = color(random(255), random(255), random(255));
  loop();
  restartButton.hide();
}