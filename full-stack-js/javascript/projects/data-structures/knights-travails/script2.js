function KnightMoves(start, end) {
  this.start = start;
  this.end = end;
  this.path = [];

  this.solve = () => {
    let queue = [[this.start]];

    let visited = new Set([`${this.start.x},${this.start.y}`]);
    while (queue.length > 0) {
      let path = queue.shift();
      let currentPos = path[path.length - 1];
      if (currentPos.x === this.end.x && currentPos.y === this.end.y) {
        this.path = path;
        return path;
      }

      for (let move of this.moves(currentPos)) {
        let moveKey = `${move.x},${move.y}`;
        if (!visited.has(moveKey)) {
          visited.add(moveKey);
          queue.push([...path, move]);
          console.log(moveKey);
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

// Example usage:
const knight = new KnightMoves({ x: 3, y: 3 }, { x: 7, y: 7 });
console.log(knight.solve());
