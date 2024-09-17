import "./styles.css";
import image1 from "./assets/img1.png";
import image2 from "./assets/img2.png";
import image3 from "./assets/img3.png";
import image4 from "./assets/img4.png";

function imageCarousel() {
  const imageContainer = document.getElementById("image");
  const images = [image1, image2, image3, image4];
  const arrows = document.getElementById("arrows");
  const dots = document.getElementById("dots");
  let autoSlideInterval;
  let counter = 0;

  function updateImage() {
    imageContainer.innerHTML = `<img src="${images[counter]}" alt="${images[counter]}"/>`;
    highlightDots(counter);
    resetAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      counter = (counter + 1) % images.length;
      updateImage();
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  arrows.addEventListener("click", (e) => {
    const target = e.target.className;
    if (target === "forward") {
      counter = (counter + 1) % images.length;
    }
    if (target === "back") {
      counter = counter === 0 ? 3 : (counter - 1) % images.length;
    }
    updateImage();
  });

  dots.addEventListener("click", (e) => {
    const target = e.target.dataset["dot"];
    if (target) {
      counter = target;
      updateImage();
    }
  });

  updateImage();
}

function highlightDots(dot) {
  const dots = document.getElementById("dots");
  Array.from(dots.children).forEach((dot) => (dot.style.color = "#202020"));
  dots.children[dot].style.color = "#7e7e7e";
}

imageCarousel();
