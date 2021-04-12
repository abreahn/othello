function othello (){
  const black = '<div class="black-stone"></div>';
  const white = '<div class="white-stone"></div>';
  const pass = document.getElementById("pass");
  const td = document.getElementsByTagName('td');
  const white_num_box = document.getElementById("white_num");
  const black_num_box = document.getElementById("black_num");
  const result_box = document.getElementById("result");
  const player_turn = document.getElementById("player_turn");
  let stone = "white-stone";
  
  for (let i = 0; i < 64; i++) {
    td[i].addEventListener("click", () =>{
      
      //間に挟まれる黒の数
      let up = 0; 
      let up_right = 0;
      let right = 0;
      let down_right = 0;
      let down = 0;
      let down_left = 0;
      let left = 0;
      let up_left = 0;
      
      if (td[i].innerHTML == ""){
       td[i].insertAdjacentHTML("afterbegin", `<div class="${stone}"></div>`);
      }
      
      //白のターン
      if (stone == "white-stone"){
        player_turn.innerHTML = "Black turn"; //表示の変更
        //上方向の処理
        for (let j = i - 8; 0 < j; j -= 8){
          if (td[j].innerHTML == black){
            up++
          }
          else if (td[j].innerHTML == white) {
            for (let k = i - 8; k >= i - 8 * up; k -= 8){
              td[k].innerHTML = white
            }
            console.log(`up=${up}`);
            break;
          }
          else {
            break;
          }
        };

        //右上方向の処理
        for (let j = i - 7; j % 8 != 0 && 0 <= j; j -= 7){
          if (td[j].innerHTML == black){
            up_right++
          }
          else if (td[j].innerHTML == white) {
            for (let k = i - 7; k >= i - 7 * up_right; k -= 7){
              td[k].innerHTML = white
            }
            console.log(`up_right=${up_right}`);
            break;
          }
          else {
            break;
          }
        };

        //右方向の処理
        for (let j = i + 1; j % 8 != 0; j++){
          if (td[j].innerHTML == black){
            right++
          }
          else if (td[j].innerHTML == white) {
            for (let k = i + 1; k <= i + right; k++){
              td[k].innerHTML = white
            }
            console.log(`right=${right}`);
            break;
          }
          else {
            break;
          }
        };

        //右下方向の処理
        for (let j = i + 9; j % 8 != 0 && j < 64; j += 9){
          if (td[j].innerHTML == black){
            down_right++
          }
          else if (td[j].innerHTML == white) {
            for (let k = i + 9; k <= i + 9 * down_right; k += 9){
              td[k].innerHTML = white
            }
            console.log(`down_right=${down_right}`);
            break;
          }
          else {
            break;
          }
        };

        //下方向の処理
        for (let j = i + 8; j < 64; j += 8){
          if (td[j].innerHTML == black){
            down++
          }
          else if (td[j].innerHTML == white) {
            for (let k = i + 8; k <= i + 8 * down; k += 8){
              td[k].innerHTML = white
            }
            console.log(`down=${down}`);
            break;
          }
          else {
            break;
          }
        };

        //左下方向の処理
        for (let j = i + 7; j % 8 != 7 && j < 64; j += 7){
          if (td[j].innerHTML == black){
            down_left++
          }
          else if (td[j].innerHTML == white) {
            for (let k = i + 7; k <= i + 7 * down_left; k += 7){
              td[k].innerHTML = white
            }
            console.log(`down_left=${down_left}`);
            break;
          }
          else {
            break;
          }
        };

        //左方向の処理
        for (let j = i - 1; j % 8 != 7 && 0 <= j; j--){
          if (td[j].innerHTML == black){
            left++
          }
          else if (td[j].innerHTML == white) {
            for (let k = i - 1; k >= i - left; k--){
              td[k].innerHTML = white
            }
            console.log(`left=${left}`);
            break;
          }
          else {
            break;
          }
        };

        //左上方向の処理
        for (let j = i - 9; j % 8 != 7 && 0 <= j; j -= 9){
          if (td[j].innerHTML == black){
            up_left++
          }
          else if (td[j].innerHTML == white) {
            for (let k = i - 9; k >= i - 9 * up_left; k -= 9){
              td[k].innerHTML = white
            }
            console.log(`up_left=${up_left}`);
            break;
          }
          else {
            break;
          }
        };
      };

      //黒のターン---------------------------------------
      if (stone == "black-stone"){
        player_turn.innerHTML = "White turn"; //表示の変更
        //上方向の処理
        for (let j = i - 8; 0 < j; j -= 8){
          if (td[j].innerHTML == white){
            up++
          }
          else if (td[j].innerHTML == black) {
            for (let k = i - 8; k >= i - 8 * up; k -= 8){
              td[k].innerHTML = black
            }
            console.log(`up=${up}`);
            break;
          }
          else {
            break;
          }
        };

        //右上方向の処理
        for (let j = i - 7; j % 8 != 0 && 0 <= j; j -= 7){
          if (td[j].innerHTML == white){
            up_right++
          }
          else if (td[j].innerHTML == black) {
            for (let k = i - 7; k >= i - 7 * up_right; k -= 7){
              td[k].innerHTML = black
            }
            console.log(`up_right=${up_right}`);
            break;
          }
          else {
            break;
          }
        };

        //右方向の処理
        for (let j = i + 1; j % 8 != 0; j++){
          if (td[j].innerHTML == white){
            right++
          }
          else if (td[j].innerHTML == black) {
            for (let k = i + 1; k <= i + right; k++){
              td[k].innerHTML = black
            }
            console.log(`right=${right}`);
            break;
          }
          else {
            break;
          }
        };

        //右下方向の処理
        for (let j = i + 9; j % 8 != 0 && j < 64; j += 9){
          if (td[j].innerHTML == white){
            down_right++
          }
          else if (td[j].innerHTML == black) {
            for (let k = i + 9; k <= i + 9 * down_right; k += 9){
              td[k].innerHTML = black
            }
            console.log(`down_right=${down_right}`);
            break;
          }
          else {
            break;
          }
        };

        //下方向の処理
        for (let j = i + 8; j < 64; j += 8){
          if (td[j].innerHTML == white){
            down++
          }
          else if (td[j].innerHTML == black) {
            for (let k = i + 8; k <= i + 8 * down; k += 8){
              td[k].innerHTML = black
            }
            console.log(`down=${down}`);
            break;
          }
          else {
            break;
          }
        };

        //左下方向の処理
        for (let j = i + 7; j % 8 != 7 && j < 64; j += 7){
          if (td[j].innerHTML == white){
            down_left++
          }
          else if (td[j].innerHTML == black) {
            for (let k = i + 7; k <= i + 7 * down_left; k += 7){
              td[k].innerHTML = black
            }
            console.log(`down_left=${down_left}`);
            break;
          }
          else {
            break;
          }
        };

        //左方向の処理
        for (let j = i - 1; j % 8 != 7 && 0 <= j; j--){
          if (td[j].innerHTML == white){
            left++
          }
          else if (td[j].innerHTML == black) {
            for (let k = i - 1; k >= i - left; k--){
              td[k].innerHTML = black
            }
            console.log(`left=${left}`);
            break;
          }
          else {
            break;
          }
        };

        //左上方向の処理
        for (let j = i - 9; j % 8 != 7 && 0 <= j; j -= 9){
          if (td[j].innerHTML == white){
            up_left++
          }
          else if (td[j].innerHTML == black) {
            for (let k = i - 9; k >= i - 9 * up_left; k -= 9){
              td[k].innerHTML = black
            }
            console.log(`up_left=${up_left}`);
            break;
          }
          else {
            break;
          }
        };
      };

      //白黒の切り替え
      if (stone == "white-stone") { 
        stone = "black-stone";
      } else {
        stone = "white-stone";
      }

      //石の数
      let white_number = 0;
      let black_number = 0;
      for (i = 0; i < 64; i++){
        if (td[i].innerHTML == white){
          white_number++;
        } else if (td[i].innerHTML == black){
          black_number++;
        }
      }
      white_num_box.innerHTML = `<div id="num">${white_number}</div>`;
      black_num_box.innerHTML = `<div id="num">${black_number}</div>`;

      //勝敗判定
      if (white_number + black_number == 64) {
        if (white_number > black_number){
          result_box.innerHTML = `${white} <div id=win>Win!🎉</div>`;
        } else if (white_number < black_number){
          result_box.innerHTML = `${black} <div id=win>Win!🎉</div>`;
        } else {
          result_box.innerHTML = `<div id=draw>Draw</div>`;
        }
      }else if (black_number == 0){
        result_box.innerHTML = `${white} <div id=win>Win!🎉</div>`;
      }else if (white_number == 0){
        result_box.innerHTML = `${black} <div id=win>Win!🎉</div>`;
      }
      
    });
    //クリックイベント終わり
  }

  //パス
  pass.addEventListener("click", () =>{
    if (stone == "white-stone"){
      stone = "black-stone";
      player_turn.innerHTML = "Black turn";
    }
    else {
      stone = "white-stone";
      player_turn.innerHTML = "White turn";
    };
  });

  for (let i = 0; i < 64; i++) {
    td[i].addEventListener('mouseover', function(){
      this.setAttribute("style", "background-color:mediumseagreen")
    });
    td[i].addEventListener('mouseout', function(){
      this.removeAttribute("style", "background-color:green")
    });
  }
 
};

window.addEventListener('load', othello);