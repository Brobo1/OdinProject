function GameBoard() {
  const row = 3;
  const col = 3;
  const board = [];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < col; j++) {
      board[i].push(j);
    }
  }
  console.log(board);
}

GameBoard();

function GameFlow() {}

function Player(name, score) {
  this.name = name;
  this.score = score;
}
