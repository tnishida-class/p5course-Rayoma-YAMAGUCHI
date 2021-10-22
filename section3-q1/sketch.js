// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let count2;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  count2 =0;
  cycle = 120;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1.5) % cycle;
  count2 = (count2 +5.0) % cycle;
  // BLANK[1]
  ellipse(width / 2, height / 2, count);
  if(mouseIsPressed){
    ellipse(width / 2, height /2, count2 *1.2)
  }
  stroke(255);
  ellipse(width / 2, height / 2, 90);
}
