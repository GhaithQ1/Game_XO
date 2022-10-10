let turn = "x";
let title = document.querySelector(".title");
let aryaa = [];

function end(num1, num2, num3) {
  title.innerHTML = `${aryaa[num1].toUpperCase()} winner`;
  document.getElementById("itme" + num1).style.backgroundColor = "#9c27b0";
  document.getElementById("itme" + num2).style.backgroundColor = "#9c27b0";
  document.getElementById("itme" + num3).style.backgroundColor = "#9c27b0";
  setInterval(function () {
    document.getElementById("itme" + num1).classList.add("animation");
    document.getElementById("itme" + num2).classList.add("animation");
    document.getElementById("itme" + num3).classList.add("animation");
      document.getElementById("itme" + num2).style.animationDelay = "0.3s";
      document.getElementById("itme" + num3).style.animationDelay = "0.6s";
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 3000);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    aryaa[i] = document.getElementById("itme" + i).innerHTML;
  }
  setTimeout(function () {
    if (
      aryaa[1] != "" &&
      aryaa[2] != "" &&
      aryaa[3] != "" &&
      aryaa[4] != "" &&
      aryaa[5] != "" &&
      aryaa[6] != "" &&
      aryaa[7] != "" &&
      aryaa[8] != "" &&
      aryaa[9] != ""
    ) {
      location.reload();
    }
  }, 3000);
  if (aryaa[1] == aryaa[2] && aryaa[2] == aryaa[3] && aryaa[2] != "") {
    end(1, 2, 3);
  } else if (aryaa[4] == aryaa[5] && aryaa[5] == aryaa[6] && aryaa[5] != "") {
    end(4, 5, 6);
  } else if (aryaa[7] == aryaa[8] && aryaa[8] == aryaa[9] && aryaa[8] != "") {
    end(7, 8, 9);
  } else if (aryaa[1] == aryaa[4] && aryaa[4] == aryaa[7] && aryaa[7] != "") {
    end(1, 4, 7);
  } else if (aryaa[2] == aryaa[5] && aryaa[5] == aryaa[8] && aryaa[5] != "") {
    end(2, 5, 8);
  } else if (aryaa[3] == aryaa[6] && aryaa[6] == aryaa[9] && aryaa[9] != "") {
    end(3, 6, 9);
  } else if (aryaa[3] == aryaa[5] && aryaa[5] == aryaa[7] && aryaa[7] != "") {
    end(3, 5, 7);
  } else if (aryaa[1] == aryaa[5] && aryaa[5] == aryaa[9] && aryaa[9] != "") {
    end(1, 5, 9);
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn == "x" && element.innerHTML == "") {
    element.innerHTML = "x";
    turn = "O";
    title.innerHTML = "Role O";
  } else if (turn == "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "x";
    title.innerHTML = "Role X";
  }
  winner();
}
function main() {
  console.log("ghaith");
}
