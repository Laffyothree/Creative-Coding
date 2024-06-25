let colorData;
let width = 900;

function setup() {
   createCanvas(780, 420);
   background('#FFC107');
}

function preload() {
  //file data of sleep count
  colorData = loadTable ("sleep count.csv"); 
}

function getSum(total, num){
  return total + num;
}

function draw() {
let colorArray = colorData.getArray();

  for (let i = 0; i  < colorArray.length; i++){

  textFont('Georgia');
  textSize(28);
  fill(0);
  strokeWeight(0);
  text ("TOTAL OF SLEEP DURING WEEKNENDS:", 115, 70); 
  
// grid line 
  fill('#4A3730');
    rect(0, 300, 800, 0.1);
    rect(0, 250, 800, 0.1);
    rect(0, 200, 800, 0.1);
    rect(0, 150, 800, 0.1); 
    rect(0, 100, 800, 0.1); 
    
// bar option 
  fill('#795548');
	rect(180, 222, 100, 125);
	rect(330, 170, 100, 180);
	rect(480, 240, 100, 110);
    
// bottom grid line 
  fill('#4A3730');
	rect(0, 345, 800, 8);
		
// hour/s count
  fill('#000000');
	noStroke();
	textFont ('Georgia');
	textSize (15);
    
	text("FRIDAY", 202, 375);
	text("5h 21mn", 199, 205);
    
    text("SATURDAY", 342, 375);
	text("6h 39mn", 349, 152);
	
    text("SUNDAY", 502, 375);	
	text("4h 42mn", 499, 223);
  }
}