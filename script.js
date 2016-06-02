// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// **********
// TRY THIS WILL http://jsbin.com/ripiqebane/edit?html,js,output
//
//



// Example 1-1: stroke and fill
var x;
var y;
var count;
function setup() {
  createCanvas(displayWidth, displayHeight);
  stroke(0); 
  fill(88);
  x=0;
  y=50;
  count=0;
}

function draw() {
  background(255);
  noFill();
  rect(1,1,478,638);
  fill(255,0,0);
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
