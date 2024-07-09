const modalBtn = document.getElementById("show-modal");
const modal = document.getElementById("modal");
const form = document.getElementById("book-form");
const bookContainer = document.getElementById("book-container");

const myLibrary = [];
let isModal = false;
let formData;
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
addBookToLibrary({
  title: "Rise of the fall",
  author: "Armande",
  pages: 13,
  read: true,
});
addBookToLibrary({
  title: "Why sit when you can lie",
  author: "Armando",
  pages: 165,
  read: true,
});
addBookToLibrary({
  title: "Why stand when you can sit",
  author: "Armando",
  pages: 41,
  read: true,
});

function addBookCard(arr) {
  bookContainer.innerHTML = "";
  arr.forEach((book) => {
    let card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <p>${book.title}</p>
    `;
    bookContainer.appendChild(card);
  });
}

addBookCard(myLibrary);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // let formData = Object.fromEntries(new FormData(form).entries());
  formData = Object.fromEntries(new FormData(form));
  formData.read = formData.read === "on";
  addBookToLibrary(formData);
  addBookCard(myLibrary);
  console.log(myLibrary);
});

modalBtn.addEventListener("click", () => {
  isModal = !isModal;
  modal.style.display = isModal ? "block" : "none";
});
