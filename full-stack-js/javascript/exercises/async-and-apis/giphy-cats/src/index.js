import "./styles.css";

const image = document.createElement("img");
document.getElementById("container").append(image);

// fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'})
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(response) {
//     img.src = response.data.images.original.url;
//   });

async function getCats() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=XqjjoeJDPn8sZzHu9SLMBe2zkQEkDUlQ&s=cats",
    { mode: "cors" },
  );

  const catData = await response.json();
  image.src = catData.data.images.original.url;
}

getCats();
