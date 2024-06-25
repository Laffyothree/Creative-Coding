var tune
var fft

function preload() {
  tune = loadSound('Lady Killers.mp3');
}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  fft = new p5.FFT();
}

function draw() {
  background(255, 250, 228);
  noFill();
  stroke(0);
  strokeWeight(2);
  
  translate(width / 2, height / 2)
  
  var wave = fft.waveform();
  
  for (var t = -1; t <= 1; t += 2) {
    beginShape();
    for (var i = 0; i <= 180; i++) {
    var index = floor(map(i, 0, 180, 0, wave.length - 2))
    
    var r = map(wave[index], -2, 1, 150, 350)
    
    var x = r * sin(i) * t
    var y = r * cos(i)
    vertex(x, y)
    }
    endShape();
  }
}
 

function mouseClicked() {
  if (tune.isPlaying()) {
    tune.pause();
     noLoop();
  }
    else {
    tune.play();
     loop();
  }
}