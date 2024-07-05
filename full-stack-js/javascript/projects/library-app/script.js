const modalBtn = document.getElementById("show-modal");
const modal = document.getElementById("modal");
const form = document.getElementById("book-form");

const myLibrary = [];
let isModal = false;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(new Book(...Object.values(book)));
}

addBookToLibrary({
  title: "Fall of the rise",
  author: "Armando",
  pages: 1,
  read: true,
});

form.addEventListener("click", (e) => {
  e.preventDefault();
});

modalBtn.addEventListener("click", () => {
  isModal = !isModal;
  modal.style.display = isModal ? "block" : "none";
});
