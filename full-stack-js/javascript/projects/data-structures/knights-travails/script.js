function KnightMoves(start, end) {
  this.solve = () => {};
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

const knight = new KnightMoves([4, 0], [3, 7]);
knight.solve();
