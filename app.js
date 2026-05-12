let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let newgamebtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let player_turn = true;
let count = 0;
const Winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const ShowWinner = (winner) => {
  // console.log(`Winner is ${winner}`);
  msg.innerText = `Congrats Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  boxdisabled();
};

const boxdisabled = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const boxenabled = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  player_turn = true;
  count = 0;
  boxenabled();
  msgcontainer.classList.add("hide");
};

const newGame = () => {
  player_turn = true;
  count = 0;
  boxenabled();
  msgcontainer.classList.add("hide");
};
const gameDraw = () => {
  msg.innerText = "Game was Draw";
  msgcontainer.classList.remove("hide");
  boxdisabled();
};
const checkpattern = () => {
  for (let pattern of Winpatterns) {
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        ShowWinner(posval1);
        return true;
      }
    }
  }
  return false;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Clicked");

    if (player_turn) {
      box.innerText = "X";
      player_turn = false;
    } else {
      box.innerText = "O";
      player_turn = true;
    }
    count++;
    box.disabled = true;

    let winner = checkpattern();
    if (count === 9 && !winner) {
      gameDraw();
    }
    // box.disabled = true;
  });
});

restbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", newGame);
