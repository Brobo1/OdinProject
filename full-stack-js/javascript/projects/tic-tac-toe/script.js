function GameBoard() {
  const row = 3;
  const col = 3;
  const gameBoard = [];
  for (let i = 0; i < row; i++) {
    gameBoard[i] = [];
    for (let j = 0; j < col; j++) {
      gameBoard[i].push(Cell());
    }
  }

  const setGameBoard = (player, row, col) => {
    if (gameBoard[row][col].getSign() === " ") {
      gameBoard[row][col].addSign(player);
    } else {
      console.log("Already occupied");
    }
  };

  const getGameBoard = () =>
    gameBoard.map((row) => row.map((cell) => cell.getSign()));
  const printGameBoard = () =>
    gameBoard.map((row) => console.log(row.map((cell) => cell.getSign())));
  return { getGameBoard, printGameBoard, setGameBoard };
}

function Player(name, sign) {
  this.name = name;
  this.sign = sign;
}

function GameFlow() {
  const players = {
    p1: new Player("player1", "x"),
    p2: new Player("player2", "o"),
  };
  let gameBoard = new GameBoard();
  gameBoard.setGameBoard(players.p1, 1, 1);
  gameBoard.setGameBoard(players.p1, 0, 1);
  gameBoard.setGameBoard(players.p1, 2, 1);
  gameBoard.setGameBoard(players.p2, 1, 2);
  gameBoard.setGameBoard(players.p2, 2, 2);

  const validate = (board) => {
    const gameBoard = board.getGameBoard();

    const allMatch = (cells) => {
      const first = cells[0];
      return first !== " " && cells.every((cell) => cell === first);
    };
  };

  gameBoard.printGameBoard();
}

function Cell() {
  let sign = " ";

  const addSign = (player) => (sign = player.sign);
  const getSign = () => sign;
  return { addSign, getSign };
}

GameFlow();
