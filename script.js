// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
var x;

function setup() {
  createCanvas(480, 270);
  stroke(0); 
  fill(150);
  x=0;
}

function draw() {
  background(255);
  rect(x,50,50,100);
  x=x+1;
  if (touchIsDown){
    if (touchX>x && touchX<x+50 && touchY>50 && touchY<150){
      x=-50;
    }
  }
  
}
