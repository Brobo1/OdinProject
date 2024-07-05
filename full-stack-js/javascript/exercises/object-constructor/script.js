/*function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
  };
}

let book = new Book("ayyy", "armando", 243, true);

console.log(Book.prototype);

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

let player1 = new Player("armando", "x");
let player2 = new Player("armandi", "y");
console.log(
  Object.getPrototypeOf(player1) === Player.prototype, // returns true
  Object.getPrototypeOf(player2) === Player.prototype, // returns true
);
*/
