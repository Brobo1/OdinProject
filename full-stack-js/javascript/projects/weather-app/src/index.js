import "./styles.css";
import { addRow } from "./components/rows";

const searchBtn = document.getElementById("search-button");
const searchBar = document.getElementById("search-input");
const wRow = document.getElementById("weather-row");
const dataContainer = document.getElementById("weather-data");
const search = document.getElementById("search-container");

async function getWeather(location = "Oslo") {
  try {
    const res = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=WW9CBPZS3B3FM4RVE6X42RVV9 `,
      { mode: "cors" },
    );
    return await res.json();
  } catch {
    console.log("Bad request");
  }
}

weatherToday(await getWeather());

searchBtn.addEventListener("click", async () => {
  let weatherData;
  weatherData = await getWeather();
  if (searchBar.value) {
    weatherData = await getWeather(searchBar.value);
  }
  weatherToday(weatherData);
});

function weatherToday(data) {
  const location = document.createElement("div");
  const days = data.days;
  console.log(days);
  location.innerHTML = `
    <p id="location-name">
    ${data.resolvedAddress}
    </p>
  `;
  dataContainer.prepend(location);
  addRow(days);
}
