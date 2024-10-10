function KnightMoves(start, end) {
  this.start = start;
  this.end = end;
  this.path = [];

  this.solve = (path = [[this.start]]) => {
    path.push(this.moves(path[0][0]));
    for (const pathElement of path[1]) {
      path.push(this.moves(pathElement));
    }
    console.log(path);
  };

  this.allowed = (path) => {
    return path.x >= 0 && path.x < 8 && path.y >= 0 && path.y < 8;
  };

  this.moves = (path) => {
    let { x, y } = path;
    return [
      { x: x + 1, y: y + 2 },
      { x: x + 1, y: y - 2 },
      { x: x - 1, y: y + 2 },
      { x: x - 1, y: y - 2 },
      { x: x + 2, y: y + 1 },
      { x: x + 2, y: y - 1 },
      { x: x - 2, y: y + 1 },
      { x: x - 2, y: y - 1 },
    ].filter((coord) => this.allowed({ x: coord.x, y: coord.y }));
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
  return board;
}

const knight = new KnightMoves({ x: 3, y: 3 }, { x: 2, y: 1 });
knight.solve();
