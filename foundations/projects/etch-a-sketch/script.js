const container = document.getElementById("grid-container");
const gridInput = document.getElementById("grid-input");
const gridSizeBtn = document.getElementById("grid-size-btn");
const colorPicker = document.getElementById("color-picker");
const randomColorCheckbox = document.getElementById("random-checkbox");
const clearBtn = document.getElementById("clear");
let gridSizeInit = 32;

function grid() {
  let gridSize = 32;
  let cellSize = 30;

  const getGridSize = () => gridSize;
  const setGridSize = (newSize) => (gridSize = newSize);

  const getCellSize = () => cellSize;
  const setCellSize = () => (cellSize = 30 * (gridSizeInit / gridSize));

  return { setGridSize, getGridSize, setCellSize, getCellSize };
}

const size = grid();

const createGrid = (gridSize, cellSize) => {
  container.innerHTML = "";
  for (let x = 0; x < gridSize; x++) {
    let cols = document.createElement("div");
    cols.className = "cols";
    for (let y = 0; y < gridSize; y++) {
      let cells = document.createElement("div");
      cells.className = "cell";
      cells.style.width = `${cellSize}px`;
      cells.style.height = `${cellSize}px`;
      cols.appendChild(cells);
    }
    container.appendChild(cols);
  }
};

const random = () => {
  return Math.floor(Math.random() * 255);
};

const randomColor = () => {
  return `rgb(${random()},${random()},${random()})`;
};

createGrid(size.getGridSize(), size.getCellSize());

gridSizeBtn.addEventListener("click", () => {
  if (
    gridInput.value !== "" &&
    gridInput.value >= 1 &&
    gridInput.value <= 100
  ) {
    size.setGridSize(parseInt(gridInput.value));
    size.setCellSize();
    createGrid(size.getGridSize(), size.getCellSize());
  } else {
    alert("Enter number between 1 and 100");
  }
});

clearBtn.addEventListener("click", () =>
  createGrid(size.getGridSize(), size.getCellSize()),
);
container.addEventListener("dragstart", (e) => e.preventDefault());

let lastCell;
container.addEventListener("mousemove", (e) => {
  if (
    e.target.className === "cell" &&
    e.buttons === 1 &&
    lastCell !== e.target
  ) {
    lastCell = e.target;
    e.target.style.background = randomColorCheckbox.checked
      ? randomColor()
      : colorPicker.value;
  }
});
