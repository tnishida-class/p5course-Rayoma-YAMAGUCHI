// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 255, 255, 0, 150, 150);
}

function balloon(t, R, B, G, x, y){
  let w = textWidth(t); //return the length of text
  let h = textAscent(t) + textDescent(t);
  let p = 2;
  fill(R, B, G);
  rect(x, y, w + p * 2, 1.5 * h + p * 2);
  triangle(x, y + 33, x, y + 50, x + 20, y + 33);
  fill(0);
  text(t, x + p, y + h + p);
  nogizaka_fun(x - 40, y + 90)
}

function nogizaka_fun(x, y){
  fill(255);
  ellipse(x, y, 75);
  ellipse(x + 15, y - 12, 5);
  ellipse(x - 15, y - 12, 5);
}
