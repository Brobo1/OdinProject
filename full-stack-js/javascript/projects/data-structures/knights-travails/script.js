function KnightMoves(start, end) {
  this.start = start;
  this.end = end;
  this.path = [];

  this.solve = () => {
    let counter = 0;
    let queue = [[this.start]];
    let visited = [];

    while (queue.length > 0) {
      let path = queue.shift();
      let currentPos = path[path.length - 1];
      if (currentPos.x === this.end.x && currentPos.y === this.end.y) {
        this.path = path;
        console.log(counter);
        return path;
      }

      for (let move of this.moves(currentPos)) {
        if (!visited.some((v) => v.x === move.x && v.y === move.y)) {
          visited.push(move);
          queue.push([...path, move]);
          counter++;
        }
      }
    }

    return null;
  };

  this.allowed = (coord) => {
    return coord.x >= 0 && coord.x < 8 && coord.y >= 0 && coord.y < 8;
  };

  this.moves = (coord) => {
    let { x, y } = coord;
    return [
      { x: x + 1, y: y + 2 },
      { x: x + 1, y: y - 2 },
      { x: x - 1, y: y + 2 },
      { x: x - 1, y: y - 2 },
      { x: x + 2, y: y + 1 },
      { x: x + 2, y: y - 1 },
      { x: x - 2, y: y + 1 },
      { x: x - 2, y: y - 1 },
    ].filter(this.allowed);
  };
}

const knight = new KnightMoves({ x: 3, y: 3 }, { x: 7, y: 7 });
console.log(knight.solve());
