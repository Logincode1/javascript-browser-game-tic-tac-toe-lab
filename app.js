const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.getElementById("message")
const resetBtnEl = document.getElementById("reset")


const winCon = [
  [2, 4, 6],
  [0, 1, 2],
  [6, 7, 8],
  [0, 3, 6],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 5, 8]
]


let board
let turn
let winner
let tie

function init(){
  board = ["", "", "", "", "", "", "", "", ""]
  turn = "X"
  winner = false
  tie = false
  render()
}

function render(){
  updateBoard()
  updateMessage()
}

function updateBoard(){
  
  squareEls[0].textContent = board[0]
  squareEls[1].textContent = board[1]
  squareEls[2].textContent = board[2]
  squareEls[3].textContent = board[3]
  squareEls[4].textContent = board[4]
  squareEls[5].textContent = board[5]
  squareEls[6].textContent = board[6]
  squareEls[7].textContent = board[7]
  squareEls[8].textContent = board[8]

  
  for (let i = 0; i < 9; i++) {
    squareEls[i].classList.remove("X")
    squareEls[i].classList.remove("O")
    if (board[i] === "X") {
      squareEls[i].classList.add("X")
    }
    if (board[i] === "O") {
      squareEls[i].classList.add("O")
    }
  }
}

function updateMessage(){
  if (!winner && !tie){
    messageEl.textContent = (turn === "X" ? "Player 1" : "Player-2") + "'s turn"
  }
  if (!winner && tie){
    messageEl.textContent = "Cat's Scratch!"
  }
  if (winner){
    messageEl.textContent = (winner === "X" ? "Player-1" : "Player-2") + " You Win!"
  }
}

function handleClick(e){
  let idx = Array.from(squareEls).indexOf(e.target)
  if (idx === -1) return
  if (board[idx] !== "" || winner || tie) return

  board[idx] = turn
  checkForWinner()
  checkForTie()
  if (!winner && !tie){
    if (turn === "X"){
      turn = "O"
    } else {
      turn = "X"
    }
  }
  render()
}

function checkForWinner(){
  
  for (let i = 0; i < winCon.length; i++){
    let a = winCon[i][0]
    let b = winCon[i][1]
    let c = winCon[i][2]
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]){
      winner = board[a]
    }
  }
}

function checkForTie(){
  if (!winner){
    let full = true
    for (let i = 0; i < board.length; i++){
      if (board[i] === ""){
        full = false
      }
    }
    if (full) tie = true
  }
}


squareEls[0].addEventListener("click", handleClick)
squareEls[1].addEventListener("click", handleClick)
squareEls[2].addEventListener("click", handleClick)
squareEls[3].addEventListener("click", handleClick)
squareEls[4].addEventListener("click", handleClick)
squareEls[5].addEventListener("click", handleClick)
squareEls[6].addEventListener("click", handleClick)
squareEls[7].addEventListener("click", handleClick)
squareEls[8].addEventListener("click", handleClick)

resetBtnEl.addEventListener("click", init)


init()