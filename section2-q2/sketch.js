// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if(i%2 + j%2 == 1){
      fill(128);
      rect(size *i, size *j, 25, 25);
      }

      if(i%2 + j%2 == 1){
        if(j<3){
        fill(255,0,0);
        ellipse(size*(i+0.5), size *(j+0.5) , 20);
        }
        else if (j>4) {
        fill(0);
        ellipse(size*(i+0.5), size *(j+0.5) , 20);
        }
      }
    }
  }
}
