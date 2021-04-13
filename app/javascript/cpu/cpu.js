function othello (){
  const table = document.getElementById("table");
  const black = '<div class="black-stone"></div>';
  const white = '<div class="white-stone"></div>';
  const pass = document.getElementById("pass");
  const td = document.getElementsByTagName('td');
  const white_num_box = document.getElementById("white_num");
  const black_num_box = document.getElementById("black_num");
  const result_box = document.getElementById("result");
  const player_turn = document.getElementById("player_turn");
  let stone = "white-stone";
  let white_number = 0;
  let black_number = 0;
  
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
        //上方向の処理
        for (let j = i - 8; 0 < j; j -= 8){
          if (td[j].innerHTML == black){
            up++;
          }
          else if (td[j].innerHTML == white) {
            for (let k = i - 8; k >= i - 8 * up; k -= 8){
              td[k].innerHTML = white;
            }
            break;
          }
          else {break;}
        }

        //右上方向の処理
        for (let j = i - 7; j % 8 != 0 && 0 <= j; j -= 7){
          if (td[j].innerHTML == black){
            up_right++;
          }
          else if (td[j].innerHTML == white) {
            for (let k = i - 7; k >= i - 7 * up_right; k -= 7){
              td[k].innerHTML = white;
            }
            break;
          }
          else {break;}
        }

        //右方向の処理
        for (let j = i + 1; j % 8 != 0; j++){
          if (td[j].innerHTML == black){
            right++;
          }
          else if (td[j].innerHTML == white) {
            for (let k = i + 1; k <= i + right; k++){
              td[k].innerHTML = white;
            }
            break;
          }
          else {break;}
        }

        //右下方向の処理
        for (let j = i + 9; j % 8 != 0 && j < 64; j += 9){
          if (td[j].innerHTML == black){
            down_right++;
          }
          else if (td[j].innerHTML == white) {
            for (let k = i + 9; k <= i + 9 * down_right; k += 9){
              td[k].innerHTML = white;
            }
            break;
          }
          else {break;}
        }

        //下方向の処理
        for (let j = i + 8; j < 64; j += 8){
          if (td[j].innerHTML == black){
            down++;
          }
          else if (td[j].innerHTML == white) {
            for (let k = i + 8; k <= i + 8 * down; k += 8){
              td[k].innerHTML = white;
            }
            break;
          }
          else {break;}
        }

        //左下方向の処理
        for (let j = i + 7; j % 8 != 7 && j < 64; j += 7){
          if (td[j].innerHTML == black){
            down_left++;
          }
          else if (td[j].innerHTML == white) {
            for (let k = i + 7; k <= i + 7 * down_left; k += 7){
              td[k].innerHTML = white;
            }
            break;
          }
          else {break;}
        }

        //左方向の処理
        for (let j = i - 1; j % 8 != 7 && 0 <= j; j--){
          if (td[j].innerHTML == black){
            left++;
          }
          else if (td[j].innerHTML == white) {
            for (let k = i - 1; k >= i - left; k--){
              td[k].innerHTML = white;
            }
            break;
          }
          else {break;}
        }

        //左上方向の処理
        for (let j = i - 9; j % 8 != 7 && 0 <= j; j -= 9){
          if (td[j].innerHTML == black){
            up_left++;
          }
          else if (td[j].innerHTML == white) {
            for (let k = i - 9; k >= i - 9 * up_left; k -= 9){
              td[k].innerHTML = white;
            }
            break;
          }
          else {break;}
        }
      }

      //白黒の切り替え
      stone = "black-stone";
      //石の数
      count_stone();
    });
  }

  //パス
  pass.addEventListener("click", () =>{
    if (stone == "white-stone"){
      stone = "black-stone";
    }
    else {
      stone = "white-stone";
    };
    setTimeout(cpu, 1000);
  });

  //マスの色を変える
  for (let i = 0; i < 64; i++) {
    td[i].addEventListener('mouseover', function(){
      this.setAttribute("style", "background-color:mediumseagreen");
    });
    td[i].addEventListener('mouseout', function(){
      this.removeAttribute("style", "background-color:green");
    });
  }
 
  //石のカウントと勝敗判定
  function count_stone(){
    for (i = 0; i < 64; i++){
      if (td[i].innerHTML == white){
        white_number++;
      } else if (td[i].innerHTML == black){
        black_number++;
      }
    }
    white_num_box.innerHTML = `<div id="num">${white_number}</div>`;
    black_num_box.innerHTML = `<div id="num">${black_number}</div>`;

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
    white_number = 0;
    black_number = 0;
  }

  //クリック後にコンピューターが石を置く
  table.addEventListener("click", () =>{
    setTimeout(cpu, 1000);
  });

  //cpuの動き
  const cpu = function(){
    //置ける箇所の判定
    let placeable_square_numbers = [];
    let placeable_square = [];
    for (let i = 0; i < 64; i++) {  
      //間に挟まれる黒の数
      let up = 0; 
      let up_right = 0;
      let right = 0;
      let down_right = 0;
      let down = 0;
      let down_left = 0;
      let left = 0;
      let up_left = 0;
      
      if (td[i].innerHTML == "") {
        if (stone == "black-stone"){
          //上方向の判定
          for (let j = i - 8; -8 <= j; j -= 8){
            if (j < 0){
              up = 0;
              break;
            }else if (td[j].innerHTML == white){
              up++;
            }
            else if (td[j].innerHTML == black) {
              break;
            }
            else {
              up = 0;
              break;
            }
          }

          //右上方向の判定
          for (let j = i - 7; -7 <= j; j -= 7){
            if (j % 8 == 0 || j < 1){
              up_right = 0;
              break;
            }
            if (td[j].innerHTML == white){
              up_right++;
            }
            else if (td[j].innerHTML == black) {
              break;
            }
            else {
              up_right = 0;
              break;
            }
          }

          //右方向の判定
          for (let j = i + 1; j <= 64; j++){
            if (j % 8 == 0){
              right = 0;
              break;
            }else if (td[j].innerHTML == white){
              right++;
            }else if (td[j].innerHTML == black) {
              break;
            }
            else {
              right = 0;
              break;
            }
          }

          //右下方向の判定
          for (let j = i + 9; j < 73; j += 9){
            if (j % 8 == 0 || 63 < j){
              down_right = 0;
              break;
            }
            if (td[j].innerHTML == white){
              down_right++;
            }
            else if (td[j].innerHTML == black) {
              break;
            }
            else {
              down_right = 0;
              break;
            }
          }

          //下方向の判定
          for (let j = i + 8; j <= 72; j += 8){
            if (63 < j){
              down = 0;
              break;
            }else if (td[j].innerHTML == white){
              down++;
            }
            else if (td[j].innerHTML == black) {
              break;
            }
            else {
              down = 0;
              break;
            }
          }

          //左下方向の判定
          for (let j = i + 7; j < 71; j += 7){
            if (j % 8 == 7 || 63 < j){
              down_left = 0;
              break;
            }else if (td[j].innerHTML == white){
              down_left++;
            }
            else if (td[j].innerHTML == black) {
              break;
            }
            else {
              down_left = 0;
              break;
            }
          }

          //左方向の判定
          for (let j = i - 1; j >= -1; j--){
            if (j % 8 == 7 || j == -1) {
              left = 0;
              break;
            }else if (td[j].innerHTML == white){
              left++;
            }else if (td[j].innerHTML == black) {
              break;
            }
            else {
              left = 0;
              break;
            }
          }

          //左上方向の判定
          for (let j = i - 9; j >= -9; j -= 9){
            if (j % 8 == 7 || j < 0) {
              up_left = 0;
              break;
            }else if (td[j].innerHTML == white){
              up_left++;
            }else if (td[j].innerHTML == black) {
              break;
            }
            else {
              up_left = 0;
              break;
            }
          }
        }

        let total = up + up_right + right + down_right + down + down_left + left + up_left;
        
        if (total != 0) {
          placeable_square_numbers.push(i);
          placeable_square.push(td[i]);

          up = 0; 
          up_right = 0;
          right = 0;
          down_right = 0;
          down = 0;
          down_left = 0;
          left = 0;
          up_left = 0;
        } 
      }
    }
    //判定終わり

    //置けるマスがあればランダムな位置に置く
    if (placeable_square.length != 0){
      let random = placeable_square_numbers[Math.floor(Math.random() * placeable_square.length)];
      td[random].innerHTML = black;

      stone = "white-stone";

      let up = 0; 
      let up_right = 0;
      let right = 0;
      let down_right = 0;
      let down = 0;
      let down_left = 0;
      let left = 0;
      let up_left = 0;

      //上方向の処理
      for (let j = random - 8; 0 < j; j -= 8){
        if (td[j].innerHTML == white){
          up++;
        }
        else if (td[j].innerHTML == black) {
          for (let k = random - 8; k >= random - 8 * up; k -= 8){
            td[k].innerHTML = black;
          }
          break;
        }
        else {break;}
      }

      //右上方向の処理
      for (let j = random - 7; j % 8 != 0 && 0 <= j; j -= 7){
        if (td[j].innerHTML == white){
          up_right++;
        }
        else if (td[j].innerHTML == black) {
          for (let k = random - 7; k >= random - 7 * up_right; k -= 7){
            td[k].innerHTML = black;
          }
          break;
        }
        else {break;}
      }

      //右方向の処理
      for (let j = random + 1; j % 8 != 0; j++){
        if (td[j].innerHTML == white){
          right++;
        }
        else if (td[j].innerHTML == black) {
          for (let k = random + 1; k <= random + right; k++){
            td[k].innerHTML = black;
          }
          break;
        }
        else {break;}
      }

      //右下方向の処理
      for (let j = random + 9; j % 8 != 0 && j < 64; j += 9){
        if (td[j].innerHTML == white){
          down_right++;
        }
        else if (td[j].innerHTML == black) {
          for (let k = random + 9; k <= random + 9 * down_right; k += 9){
            td[k].innerHTML = black;
          }
          break;
        }
        else {break;}
      }

      //下方向の処理
      for (let j = random + 8; j < 64; j += 8){
        if (td[j].innerHTML == white){
          down++;
        }
        else if (td[j].innerHTML == black) {
          for (let k = random + 8; k <= random + 8 * down; k += 8){
            td[k].innerHTML = black;
          }
          break;
        }
        else {break;}
      }

      //左下方向の処理
      for (let j = random + 7; j % 8 != 7 && j < 64; j += 7){
        if (td[j].innerHTML == white){
          down_left++;
        }
        else if (td[j].innerHTML == black) {
          for (let k = random + 7; k <= random + 7 * down_left; k += 7){
            td[k].innerHTML = black;
          }
          break;
        }
        else {break;}
      }

      //左方向の処理
      for (let j = random - 1; j % 8 != 7 && 0 <= j; j--){
        if (td[j].innerHTML == white){
          left++;
        }
        else if (td[j].innerHTML == black) {
          for (let k = random - 1; k >= random - left; k--){
            td[k].innerHTML = black;
          }
          break;
        }
        else {break;}
      }

      //左上方向の処理
      for (let j = random - 9; j % 8 != 7 && 0 <= j; j -= 9){
        if (td[j].innerHTML == white){
          up_left++;
        }
        else if (td[j].innerHTML == black) {
          for (let k = random - 9; k >= random - 9 * up_left; k -= 9){
            td[k].innerHTML = black;
          }
          break;
        }
        else {break;}
      }
    }
    
    //白黒の切り替え
    stone = "white-stone";
    //石の数
    count_stone();
  }
}

window.addEventListener('load', othello);


