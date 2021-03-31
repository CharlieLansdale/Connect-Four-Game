const sixthRow = document.querySelectorAll(".sixth-row")
const fifthRow = document.querySelectorAll(".fifth-row")
const fourthRow = document.querySelectorAll(".fourth-row")
const thirdRow = document.querySelectorAll(".third-row");
const secondRow = document.querySelectorAll(".second-row");
const firstRow = document.querySelectorAll(".first-row");
const columnOneButton = document.querySelector("#column1-button");
const columnTwoButton = document.querySelector("#column2-button");
const columnThreeButton = document.querySelector("#column3-button");
const columnFourButton = document.querySelector("#column4-button");
const columnFiveButton = document.querySelector("#column5-button");
const columnSixButton = document.querySelector("#column6-button");
const columnSevenButton = document.querySelector("#column7-button");
const displayCurrentPlayer = document.querySelector("#current-player");
const resetButton = document.querySelector(".reset-button");
const squares = document.querySelectorAll(".grid div");
// let playerTurn = "player-one";
// const playerOne = document.querySelectorAll(".player-one");
// const playerTwo = document.querySelectorAll(".player-two"); 

// Column 1 button

columnOneButton.addEventListener("click", () => {
  

  if (!sixthRow[0].classList.contains("player-one")) {
    sixthRow[0].classList.add("player-one")
  } else if (!fifthRow[0].classList.contains("player-one")) {
  fifthRow[0].classList.add("player-one")
  } else if (!fourthRow[0].classList.contains('player-one')) {
  fourthRow[0].classList.add("player-one")
  } else if (!thirdRow[0].classList.contains('player-one')) {
  thirdRow[0].classList.add("player-one")
  } else if (!secondRow[0].classList.contains('player-one')) {
  secondRow[0].classList.add("player-one")
  }
  else {
  firstRow[0].classList.add("player-one")
}
})

// Column 2 button

columnTwoButton.addEventListener("click", () => {
  

  if (!sixthRow[1].classList.contains("player-one")) {
    sixthRow[1].classList.add("player-one")
  } else if (!fifthRow[1].classList.contains("player-one")) {
  fifthRow[1].classList.add("player-one")
  } else if (!fourthRow[1].classList.contains('player-one')) {
  fourthRow[1].classList.add("player-one")
  } else if (!thirdRow[1].classList.contains('player-one')) {
  thirdRow[1].classList.add("player-one")
  } else if (!secondRow[1].classList.contains('player-one')) {
  secondRow[1].classList.add("player-one")
  }
  else {
  firstRow[1].classList.add("player-one")
}
})

// Column 3 button

columnThreeButton.addEventListener("click", () => {
  
  if (!sixthRow[2].classList.contains("player-one")) {
    sixthRow[2].classList.add("player-one")
  } else if (!fifthRow[2].classList.contains("player-one")) {
  fifthRow[2].classList.add("player-one")
  } else if (!fourthRow[2].classList.contains('player-one')) {
  fourthRow[2].classList.add("player-one")
  } else if (!thirdRow[2].classList.contains('player-one')) {
  thirdRow[2].classList.add("player-one")
  } else if (!secondRow[2].classList.contains('player-one')) {
  secondRow[2].classList.add("player-one")
  }
  else {
  firstRow[2].classList.add("player-one")
}
})

// Column 4 button

columnFourButton.addEventListener("click", () => {
  

  if (!sixthRow[3].classList.contains("player-one")) {
    sixthRow[3].classList.add("player-one")
  } else if (!fifthRow[3].classList.contains("player-one")) {
  fifthRow[3].classList.add("player-one")
  } else if (!fourthRow[3].classList.contains('player-one')) {
  fourthRow[3].classList.add("player-one")
  } else if (!thirdRow[3].classList.contains('player-one')) {
  thirdRow[3].classList.add("player-one")
  } else if (!secondRow[3].classList.contains('player-one')) {
  secondRow[3].classList.add("player-one")
  }
  else {
  firstRow[3].classList.add("player-one")
}
})

// Column 5 button

columnFiveButton.addEventListener("click", () => {
  

  if (!sixthRow[4].classList.contains("player-one")) {
    sixthRow[4].classList.add("player-one")
  } else if (!fifthRow[4].classList.contains("player-one")) {
  fifthRow[4].classList.add("player-one")
  } else if (!fourthRow[4].classList.contains('player-one')) {
  fourthRow[4].classList.add("player-one")
  } else if (!thirdRow[4].classList.contains('player-one')) {
  thirdRow[4].classList.add("player-one")
  } else if (!secondRow[4].classList.contains('player-one')) {
  secondRow[4].classList.add("player-one")
  }
  else {
  firstRow[4].classList.add("player-one")
}
})

// Column 6 button

columnSixButton.addEventListener("click", () => {
  

  if (!sixthRow[5].classList.contains("player-one")) {
    sixthRow[5].classList.add("player-one")
  } else if (!fifthRow[5].classList.contains("player-one")) {
  fifthRow[5].classList.add("player-one")
  } else if (!fourthRow[5].classList.contains('player-one')) {
  fourthRow[5].classList.add("player-one")
  } else if (!thirdRow[5].classList.contains('player-one')) {
  thirdRow[5].classList.add("player-one")
  } else if (!secondRow[5].classList.contains('player-one')) {
  secondRow[5].classList.add("player-one")
  }
  else {
  firstRow[5].classList.add("player-one")
}
})

// Column 7 button

columnSevenButton.addEventListener("click", () => {
  

  if (!sixthRow[6].classList.contains("player-one")) {
    sixthRow[6].classList.add("player-one")
  } else if (!fifthRow[6].classList.contains("player-one")) {
  fifthRow[6].classList.add("player-one")
  } else if (!fourthRow[6].classList.contains('player-one')) {
  fourthRow[6].classList.add("player-one")
  } else if (!thirdRow[6].classList.contains('player-one')) {
  thirdRow[6].classList.add("player-one")
  } else if (!secondRow[6].classList.contains('player-one')) {
  secondRow[6].classList.add("player-one")
  }
  else {
  firstRow[6].classList.add("player-one")
}
})

// Adding second player 

// if (playerTurn = classList.("player-one")) {
//   classList.add("player-one")
// } else classList.add("player-two")

// Reset button

function reload() {
  reload = location.reload();
}
resetButton.addEventListener("click", reload, false);

// if thirdRow [0] doesnt have player-one add to thirdRow [0]
// else if secondRow [0] doesnt have player one add to secondRow [0]
// else add to top [0]