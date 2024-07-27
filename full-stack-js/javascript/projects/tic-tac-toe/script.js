const gameBoardDiv = document.getElementById("game-board");

function GameBoard() {
  const row = 3;
  const col = 3;
  const gameBoard = [];
  const cellElements = [];

  for (let i = 0; i < row; i++) {
    gameBoard[i] = [];
    cellElements[i] = [];
    const gameBoardRows = document.createElement("div");
    for (let j = 0; j < col; j++) {
      gameBoard[i].push(Cell());
      const gameBoardCell = document.createElement("div");
      gameBoardCell.className = "cell";

      gameBoardCell.textContent = gameBoard[i][j].getSign();
      cellElements[i].push(gameBoardCell);
      console.log(gameBoard[i][j].getSign());
      gameBoardRows.appendChild(gameBoardCell);
    }
    gameBoardDiv.appendChild(gameBoardRows);
  }

  const setCell = (player, row, col) => {
    if (gameBoard[row][col].getSign() === " ") {
      gameBoard[row][col].addSign(player);
      cellElements[row][col].textContent = player.sign;
      return true;
    } else {
      console.log("Already occupied");
      return false;
    }
  };

  const getGameBoard = () =>
    gameBoard.map((row) => row.map((cell) => cell.getSign()));
  const printGameBoard = () => {
    gameBoard.map((row) => {
      // console.log(row.map((cell) => cell.getSign()));
      // console.log(" ");
    });
    // console.log("-----------------");
  };
  return { getGameBoard, printGameBoard, setCell };
}

function Player(name, sign) {
  this.name = name;
  this.sign = sign;
}

function GameFlow() {
  let gameBoard = new GameBoard();
  const players = [new Player("player1", "x"), new Player("player2", "o")];
  let playerIndex = 0;

  const playTurn = (row, col) => {
    const currPlayer = players[playerIndex];
    gameBoard.setCell(currPlayer, row, col);
    playerIndex = (playerIndex + 1) % 2;
    gameBoard.printGameBoard();
    validate(gameBoard);
  };

  const validate = (board) => {
    const gameBoard = board.getGameBoard();

    const allMatch = (cells) => {
      const first = cells[0];
      return first !== " " && cells.every((cell) => cell === first);
    };

    for (let i = 0; i < 3; i++) {
      if (allMatch(gameBoard[i])) {
        return gameBoard[i][0];
      }
    }

    for (let i = 0; i < 3; i++) {
      const column = [gameBoard[0][i], gameBoard[1][i], gameBoard[2][i]];
      if (allMatch(column)) {
        return column[0];
      }
    }

    const diag1 = [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]];
    const diag2 = [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]];
    if (allMatch(diag1)) return diag1[0];
    if (allMatch(diag2)) return diag2[0];

    if (gameBoard.every((row) => row.every((cell) => cell !== " "))) {
      return "draw";
    }

    return null;
  };

  return { playTurn };
}

function Cell() {
  let sign = " ";

  const addSign = (player) => (sign = player.sign);
  const getSign = () => {
    console.log("getSign called, returning:", sign);
    return sign;
  };
  return { addSign, getSign };
}

const game = new GameFlow();
game.playTurn(0, 0); //x
game.playTurn(2, 1); //o
game.playTurn(1, 1); //x
game.playTurn(2, 0); //o
game.playTurn(2, 2); //x
