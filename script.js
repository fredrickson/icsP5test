// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
var x;
var y;
var count;
function setup() {
  createCanvas(480, 640);
  stroke(0); 
  fill(150);
  x=0;
  y=50;
  count=0;
}

function draw() {
  background(255);
  text(count,240,40);
  rect(x,y,50,100);
  x=x+1;
  if (touchIsDown){
    if (touchX>x && touchX<x+50 && touchY>y && touchY<y+100){
      x=-50;
      count+=1;
      y=random(50,500);
    }
  }
  
}
