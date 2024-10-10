function KnightMoves(x, y) {
  this.row = x;
  this.col = y;

  this.solve = (path) => {
    if (path.length === 64) return true;

    const moves = path[path.length - 1].getMoves(path);

    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      path.push(move);
    }

    if (this.solve(path)) {
      return true;
    } else path.pop();
    return false;
  };

  this.getMoves = (path) => {
    if (!path) throw new Error("path was null");

    const r = this.row;
    const c = this.col;

    return [
      [r + 1, c + 2],
      [r + 1, c - 2],
      [r - 1, c + 2],
      [r - 1, c - 2],
      [r + 2, c + 1],
      [r + 2, c - 1],
      [r - 2, c + 1],
      [r - 2, c - 1],
    ].filter((cord) => cord.this.isValid(path));
  };

  this.isValid = (path) => {
    if (!path) throw new Error("path was null");

    for (let i = 0; i < path.length; i++) {
      const sqr = path[i];
      if (sqr.row === this.row && sqr.col === this.col) return false;
    }

    return this.row >= 0 && this.row <= 64 && this.col >= 0 && this.col <= 64;
  };
}

function buildBoard() {
  let board = [];
  let str = "";
  for (let x = 0; x <= 7; x++) {
    let row = [];
    for (let y = 0; y <= 7; y++) {
      row.push([x, y]);
      str += `(${x},${y}) `;
    }
    board.push(row);
    str += "\n";
  }
  console.log(str);
  console.log(board[3][2]);
}

const knight = new KnightMoves(0, 0);
knight.solve([3, 4]);

buildBoard();
