class Board {
  constructor(state = ["", "", "", "", "", "", "", "", ""]) {
    this.state = state;
  }
  markSpace(idx, piece) {
    //    check if the space is "";
    //   if !" " then return false
    //   if " " mark the space with piece
    //   update ui
    // return true
    if (!this.isEmpty(idx)) {
      return false;
    } else {
      this.state[idx] = piece;
      this.updateUI(idx);
      return true;
    }
  }
  updateUI(idx) {
    let piece = this.state[idx];
    document.getElementById(idx).innerHTML = piece;
  }
  resetUI() {
    for (let i = 0; i < this.state.length; i++) {
      this.updateUI(i);
    }
  }
  // function to check if a space is empty
  isEmpty(idx) {
    return this.state[idx] == "";
  }

  // function to check if the board is filled
  isFull() {
    for (let i = 0; i < this.state.length; i++) {
      if (this.isEmpty(i)) {
        return false;
      }
    }
    return true;
  }
  // return 0 if no win, continue play
  // return 1 if win conditions met
  // return 2 if cat's game.
  checkWin() {
    if (
      this.state[0] == this.state[1] &&
      this.state[1] == this.state[2] &&
      !this.isEmpty(0)
    ) {
      return 1;
    } else if (
      this.state[3] == this.state[4] &&
      this.state[4] == this.state[5] &&
      !this.isEmpty(3)
    ) {
      return 1;
    } else if (
      this.state[6] == this.state[7] &&
      this.state[7] == this.state[8] &&
      !this.isEmpty(6)
    ) {
      return 1;
    } else if (
      this.state[0] == this.state[3] &&
      this.state[3] == this.state[6] &&
      !this.isEmpty(0)
    ) {
      return 1;
    } else if (
      this.state[1] == this.state[4] &&
      this.state[4] == this.state[7] &&
      !this.isEmpty(1)
    ) {
      return 1;
    } else if (
      this.state[2] == this.state[5] &&
      this.state[5] == this.state[8] &&
      !this.isEmpty(2)
    ) {
      return 1;
    } else if (
      this.state[0] == this.state[4] &&
      this.state[4] == this.state[8] &&
      !this.isEmpty(0)
    ) {
      return 1;
    } else if (
      this.state[2] == this.state[4] &&
      this.state[4] == this.state[6] &&
      !this.isEmpty(2)
    ) {
      return 1;
    } else if (this.isFull()) {
      return 2;
    }
    return 0;
  }
}

class Player {
  constructor(piece) {
    this.piece = piece;
  }
  getPiece() {
    return this.piece;
  }
}

class Game {
  constructor() {}
  update(idx) {
    // calls markSpace passing the current players piece and idx
    if (!this.gameOver) {
      let updated = this.boardState.markSpace(
        idx,
        this.currentPlayer.getPiece()
      );
      // if false flash the space's background color red
      // if true space has been marked
      // checkwin
      // if win, display winner (current player)
      // else if cats game display tie
      // esle update current player

      if (updated) {
        let winCondition = this.boardState.checkWin();
        if (winCondition == 0) {
          this.switchPlayer();
          displayOutput.innerHTML = currentPlayerTurn(this.currentPlayer);
        } else if (winCondition == 1) {
          displayOutput.innerHTML = winMessage(this.currentPlayer);
          this.gameOver = true;
        } else {
          displayOutput.innerHTML = catsGameMessage();
          this.gameOver = true;
        }
      } else {
        // displayOutput. //flash it red
      }
    }
  }

  switchPlayer() {
    if (this.currentPlayer == this.X) {
      this.currentPlayer = this.O;
    } else {
      this.currentPlayer = this.X;
    }
  }
  startGame() {
    //
    this.gameOver = false;
    // create the two players
    this.X = new Player("X");
    this.O = new Player("O");

    // create the board
    this.boardState = new Board();
    this.boardState.resetUI();
    // set current player
    this.currentPlayer = this.X;

    displayOutput.innerHTML = currentPlayerTurn(this.currentPlayer);
  }
}

let game = new Game();

// Event listeners for the spaces
document
  .querySelectorAll(".space")
  .forEach((space) => space.addEventListener("click", spaceClick));

// Function to handle the click event
function spaceClick(clickedSpaceEvent) {
  //saves the clicked element for later use
  let clickedSpace = clickedSpaceEvent.target;
  //   console.log(clickedSpace);
  let spaceIndex = parseInt(clickedSpace.getAttribute("id"));
  //   console.log(spaceIndex);
  game.update(spaceIndex);
}
let displayOutput = document.querySelector(".display_info");
let winMessage = (currentPlayer) =>
  `Player ${currentPlayer.getPiece()} has won!`;
let catsGameMessage = () => `Cat's Game!`;
let currentPlayerTurn = (currentPlayer) =>
  `It's ${currentPlayer.getPiece()}'s turn.`;
