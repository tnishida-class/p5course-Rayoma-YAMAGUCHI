// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 120;
}

function draw(){
  background(160, 192, 255);
  count = (count + 2.5) % cycle;
  // BLANK[1]
  ellipse(width / 2, height / 2, count);
  stroke(255);
  ellipse(width / 2, height / 2, 80);
}
