var hour,min,sec;
var hrangle,minangle,secangle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  hour=hour();
  min=minute();
  sec=second();
  
  hrangle=map(hour%12,0,12,0,360);
  minangle=map(min,0,60,0,360);
  secangle=map(sec,0,60,0,360);

  push();
  stroke(255,0,0);
  strokeWeight(5);
  rotate(secangle);
  line(0,0,100,0);
  pop();

  push();
  stroke(0,255,0);
  strokeWeight(5);
  rotate(minangle);
  line(0,0,75,0);
  pop();

  push();
  stroke(0,0,255);
  strokeWeight(5);
  rotate(hrangle);
  line(0,0,50,0);
  pop();
}