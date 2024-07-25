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

  const setGameBoard = (player) => {};

  const getGameBoard = () => gameBoard;
  const printGameBoard = () =>
    gameBoard.map((row) => console.log(row.map((cell) => cell.getSign())));
  return { getGameBoard, printGameBoard };
}

function Player(name, sign) {
  this.name = name;
  this.sign = sign;

  const getPlayerName = () => name;
  const setPlayerName = (newName) => (name = newName);

  return { getPlayerName, setPlayerName };
}

function GameFlow() {
  const players = {
    p1: new Player("player1", "x"),
    p2: new Player("player2", "o"),
  };
  let gameBoard = new GameBoard();
  gameBoard.printGameBoard();
}

function Cell() {
  let sign = " ";

  const addSign = (player) => (sign = player.sign);
  const getSign = () => sign;
  return { addSign, getSign };
}

GameFlow();
