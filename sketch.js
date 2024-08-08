let xPos = 250; 
let yPos = 250;

function setup() {
  createCanvas(500, 500);
  noStroke();

  rectMode(CENTER);
}

function draw() {
  background(0);
  fill('aquamarine')
  rect(xPos, yPos, 50, 50)
  if(keyIsDown(UP_ARROW)){
    yPos -= 3;
  }

  if(keyIsDown(DOWN_ARROW)){
    yPos +=3;
  }

  if(keyIsDown(LEFT_ARROW)){
    yPos +=3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    yPos +=3;
  }
}

