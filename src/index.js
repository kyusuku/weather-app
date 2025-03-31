import "./styles.css";

import clear_day from "./icons/clear-day.svg";
import clear_night from "./icons/clear-night.svg";
import cloudy_day from "./icons/partly-cloudy-day.svg";
import cloudy_night from "./icons/partly-cloudy-night.svg";
import cloudy from "./icons/cloudy.svg";
import fog from "./icons/fog.svg";
import rainy_day from "./icons/rainy-day.svg";
import rainy_night from "./icons/rainy-night.svg";
import rainy from "./icons/rainy.svg";
import thunder_day from "./icons/thunder-day.svg";
import thunder_night from "./icons/thunder-night.svg";
import thunder from "./icons/thunder.svg";
import snowy_day from "./icons/snowy-day.svg";
import snowy_night from "./icons/snowy-night.svg";
import snowy from "./icons/snow.svg";
import wind from "./icons/wind.svg";

const API_KEY = "D82Z94FJ9Q7CBMRB5RQH2M26U";

const card = document.querySelector(".card");
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".fa-search");
const result = document.querySelector(".result");
const toggle = document.querySelector(".switch");
const toggleSwitch = document.querySelector(".switch input");

let tempF = null;
let feelsLike = null;

function toCelsius(temp) {
  return (Math.round((((temp - 32) * 5) / 9) * 10) / 10).toString();
}

function displayIcon(icon) {
  switch (icon) {
    case "snow":
      return snowy;
    case "rain":
      return rainy;
    case "fog":
      return fog;
    case "wind":
      return wind;
    case "cloudy":
      return cloudy;
    case "partly-cloudy-day":
      return cloudy_day;
    case "partly-cloudy-night":
      return cloudy_night;
    case "clear-day":
      return clear_day;
    case "clear-night":
      return clear_night;
    case "snow-showers-day":
      return snowy_day;
    case "snow-showers-night":
      return snowy_night;
    case "thunder-rain":
      return thunder;
    case "thunder-showers-day":
      return thunder_day;
    case "thunder-showers-night":
      return thunder_night;
    case "showers-day":
      return rainy_day;
    case "showers-night":
      return rainy_night;
  }
}

async function getWeatherData(location) {
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    const weatherData = await response.json();

    const location = weatherData.address;
    tempF = weatherData.currentConditions.temp;
    const tempC = toCelsius(Number(tempF));
    feelsLike = weatherData.currentConditions.feelslike;
    const humidity = weatherData.currentConditions.humidity;
    const windSpeed = weatherData.currentConditions.windspeed;
    const icon = weatherData.currentConditions.icon;

    result.innerHTML = "";

    const displayLocation = document.createElement("h1");
    displayLocation.textContent =
      location.charAt(0).toUpperCase() + location.slice(1);
    displayLocation.style.maxWidth = "20ch";
    displayLocation.style.overflow = "hidden";
    displayLocation.style.textOverflow = "ellipsis";

    const displayIconElement = document.createElement("img");
    displayIconElement.src = displayIcon(icon);
    displayIconElement.style.width = "130px";
    displayIconElement.style.height = "100px";

    const displayTemp = document.createElement("p");
    displayTemp.textContent = `${tempC}` + "\u00B0";
    displayTemp.style.fontSize = "30px";
    displayTemp.style.marginBottom = "20px";
    displayTemp.classList.add("displayTemp");

    const displayHumidity = document.createElement("p");
    displayHumidity.textContent = `Humidity: ${humidity}%`;

    const displayWindSpeed = document.createElement("p");
    displayWindSpeed.textContent = `Wind speed: ${windSpeed} m/s`;

    const displayFeelsLike = document.createElement("p");
    displayFeelsLike.textContent =
      `Feels Like: ${toCelsius(Number(feelsLike))}` + "\u00B0";
    displayFeelsLike.classList.add("displayFeelsLike");

    result.appendChild(displayLocation);
    result.appendChild(displayIconElement);
    result.appendChild(displayTemp);
    result.appendChild(displayHumidity);
    result.appendChild(displayWindSpeed);
    result.appendChild(displayFeelsLike);
    searchBar.value = "";

    toggle.classList.remove("hide");
    card.classList.add("showResult");
    result.classList.remove("hide");
  } catch {
    result.innerHTML = "";
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Location not found.";
    errorMessage.style.color = "red";
    errorMessage.style.textAlign = "center";
    result.appendChild(errorMessage);
    searchBar.value = "";

    toggle.classList.add("hide");
    card.classList.add("showResult");
    result.classList.remove("hide");
  }
}

searchBtn.addEventListener("click", () => {
  let location = searchBar.value.toLowerCase();
  getWeatherData(location);
});

searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let location = searchBar.value.toLowerCase();
    getWeatherData(location);
  }
});

toggleSwitch.addEventListener("change", () => {
  const displayTemp = document.querySelector(".displayTemp");
  const displayFeelsLike = document.querySelector(".displayFeelsLike");

  if (displayTemp && displayFeelsLike) {
    if (toggleSwitch.checked) {
      displayTemp.textContent = `${tempF}` + "\u00B0";
      displayFeelsLike.textContent = `Feels Like: ${feelsLike}` + "\u00B0";
    } else {
      displayTemp.textContent = `${toCelsius(Number(tempF))}` + "\u00B0";
      displayFeelsLike.textContent =
        `Feels Like: ${toCelsius(Number(feelsLike))}` + "\u00B0";
    }
  }
});
