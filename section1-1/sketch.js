function setup() {
  createCanvas(128,128);
}

function draw() {
  background(255);
  strokeWeight(4);
  fill(255, 127, 0);
  triangle(12,120,116,120,116,10);
  fill(0, 255, 255);
  triangle(0,108,106,108,106,0);
  fill(255);
  textSize(12);
  textFont("serif");
  text("DOG IS CUTE", 20, 100);
}
