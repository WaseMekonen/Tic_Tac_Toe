let btnRef = document.querySelectorAll(".button-option");
let popUpRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
  [2, 5, 8],
  [1, 4, 7],
  [6, 7, 8],
  [3, 4, 5],
];  

let xTurn = true;
let count = 0;

const disableButtons = () => {
  btnRef.forEach((button) => (button.disabled = true));
  popUpRef.classList.remove("hide");
};

const enableButtons = () => {
  btnRef.forEach((button) => {
    button.innerText = "";
    button.disabled = false;
  });
  popUpRef.classList.add("hide");
};

const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = " X Wins";
  } else {
    msgRef.innerHTML = " O Wins";
  }
};

const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <BR> It's a Draw";
};

newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};

btnRef.forEach((button) => {
  button.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      button.innerText = "X";
      button.disabled = true;
    } else {
      xTurn = true;
      button.innerText = "O";
      button.disabled = true;
    }
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    winChecker();
  });
});

window.onload = enableButtons;
