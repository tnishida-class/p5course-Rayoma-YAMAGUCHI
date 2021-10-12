// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  // BLANK[1]
  arc(100 -25, 100, 100, 100, QUARTER_PI * -3, QUARTER_PI * -3 + PI);
  //arc(中心座標(x,y)，width，hight，開始位置，終了位置)

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
 strokeWeight(0);
 strokeCap(SQUARE);
 fill(14,47,146);
 ellipse(300, 95, 130, 130);

 strokeWeight(0);
 strokeCap(SQUARE);
 fill(255, 255, 255);
 ellipse(295, 90, 115, 120);

 strokeWeight(0);
 strokeCap(SQUARE);
 fill(22, 131, 46);
 ellipse(295, 90, 110, 115);

 strokeWeight(0);
 strokeCap(SQUARE);
 fill(255, 255, 255);
 ellipse(290, 95, 105, 105);

 fill(77);
 textSize(30);
 textFont("serif");
 text("KOBE", 250, 90);

 fill(77);
 textSize(12);
 textFont("serif");
 text("UNIVERSITY", 265, 107.5);

  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
}
