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
      <p class="card-title">${book.title}</p>
      <p class="card-author">${book.author}</p>
      <p class="card-pages">${book.pages} Pages</p>
      <div class="card-btn">
        <button class="read-btn">${book.read ? "read" : "not read"}</button>
        <button class="remove-btn">Remove</button>
      </div>
    `;
    bookContainer.appendChild(card);
  });
}

function removeBook(e) {
  let title = e.target.parentElement.firstElementChild.textContent;
  let index = myLibrary.findIndex((book) => book.title === title);
  myLibrary.splice(index, 1);
  addBookCard(myLibrary);
}

function changeRead(e) {
  let title =
    e.target.parentElement.parentElement.firstElementChild.textContent;
  let index = myLibrary[myLibrary.findIndex((book) => book.title === title)];
  index.read = !index.read;
  addBookCard(myLibrary);
}

addBookCard(myLibrary);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // let formData = Object.fromEntries(new FormData(form).entries());
  formData = Object.fromEntries(new FormData(form));
  formData.read = formData.read === "on";
  addBookToLibrary(formData);
  addBookCard(myLibrary);
  isModal = false;
  modal.style.display = "none";
  form.reset();
});

modalBtn.addEventListener("click", () => {
  isModal = !isModal;
  modal.style.display = isModal ? "block" : "none";
});

modal.addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    isModal = false;
    modal.style.display = "none";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className === "read-btn") {
    changeRead(e);
  }
  if (e.target.className === "remove-btn") {
    removeBook(e);
  }
});
