import "./styles.css";

const image = document.createElement("img");
document.getElementById("container").append(image);

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=XqjjoeJDPn8sZzHu9SLMBe2zkQEkDUlQ&s=cats",
  { mode: "cors" },
)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    image.src = res.data.images.original.url;
  });
