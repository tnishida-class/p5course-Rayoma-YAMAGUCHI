// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
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
