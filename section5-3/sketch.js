// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(windowWidth, windowHeight);
  calendar(2021, 11);
}

function calendar(y, m){
  let width = windowWidth * 0.1;
  let height = windowHeight * 0.1;
// カレンダーの大きさ
  rect(width, height, width * 7, height * 7);
// カレンダーの格子
  for(i = 0; i < 5; i++){
    noFill();
    stroke(3);
    rect(width, height * 4 + i * height, width * 7, height);
  }
  for(i = 0; i < 7; i++){
    noFill();
    stroke(3);
    rect(width + i * width, height * 4, width, height * 5);
    text(dayOfWeekAsString(i), width * 1.4 + i * width, height * 3.75);
  }

// dowの宣言：日曜が0、月曜が1、....
  let dow = 0;
  if(y >= 1977){
     dow = dayOfWeek(y, m, 1);
    if(dow > 6){
      dow -= 7;
    }else{dow = dow}
  }else{
     dow = dayOfWeek(y, m, 1);
  }

// １日の座標 x1, y1
  let x1 = 1.05 * width + (dow - 1) * width;
  let y1 = height * 4.25;
// 31日分をテキスト
  for(let d = 1; d <= daysInMonth(y, m); d++){
    x1 += width;
    if(x1 > width * 8){
      x1 -= width * 7;
      y1 += height;
    }
    if(y1 >= height * 9){
      for(let i = 0; i < 7; i++){
        rect(width + width * i, height * 9, width, height);
      }
    }
    text(d, x1, y1);
  }

  textSize(height* 0.5);
  fill(0);
  text(y + " 年 " + m + " 月", width * 1.25, height * 2.25);

  let reiwa = y - 2018;
  let heisei = y - 1988;
  let showa = y - 1925;
  if(y >= 2020){
    text("令和 " + reiwa + " 年" , width * 1.25, height * 1.75);
  } else if (y == 2019 && m >= 5){
    text("令和 " + reiwa + " 年" , width * 1.25, height * 1.75);
  } else if (y == 2019 && m <= 4) {
    text("平成 " + heisei + " 年" , width * 1.25, height * 1.75);
  } else if (y >= 1989 && y < 2019 ) {
    text("平成 " + heisei + " 年" , width * 1.25, height * 1.75);
  } else if (y >= 1927 && y < 1989 ) {
    text("昭和 " + showa + " 年" , width * 1.25, height * 1.75);
  }

  else {
    text("かなり前", width * 1.25, height * 1.75);
  }

}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
  if (isLeapYear(y)) {
    return 366;
  }
  else{
    return 365;
  }
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  let w, i;
  // base_day = dayOfYear(1977, 1, 1) Then, w = 6;
  let defference_days = 0;
  if(y >= 1977){
    for (i = 0; i < y - 1977; i++) {
      defference_days += daysInYear(i + 1977);
    }
    defference_days += dayOfYear(y, m, d) - 1;
    return defference_days % 7 + 6;
    }
    else{
    for (i = 0; i < 1977 - y; i++){
      defference_days += daysInYear(i + y);
      // console.log(i+y);
    }
    defference_days -= dayOfYear(y, m, d);
    defference_days += 1;
    return 6 - defference_days % 7;
    }
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日", "月", "火", "水", "木", "金"];
  return a[dow];
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
