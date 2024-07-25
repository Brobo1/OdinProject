function GameBoard(player) {
  const row = 3;
  const col = 3;
  const gameBoard = [];
  for (let i = 0; i < row; i++) {
    gameBoard[i] = [];
    for (let j = 0; j < col; j++) {
      gameBoard[i].push(j);
    }
  }

  const setGameBoard = () => {};

  const getGameBoard = () => gameBoard;
  return { getGameBoard };
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
  console.log(gameBoard.getGameBoard());
}

GameFlow();
