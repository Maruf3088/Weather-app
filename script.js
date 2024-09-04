const inputBox = document.querySelector("#inputBox");
const search = document.querySelector("#search");
const weatherImage = document.querySelector("#weatherImage");

// Function to check weather
async function checkWeather() {
  const cityName = inputBox.value;
  if (cityName !== "") {
    const apiKey = "45cdfbd63de589e8b1366882f71121e6";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}`;

    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector("#city").textContent = data.name;
    document.querySelector("#temp").textContent = `${Math.round(
      data.main.temp
    )}°C`;
    document.querySelector("#humidity").textContent = `${data.main.humidity}%`;
    document.querySelector(
      "#windSpeed"
    ).textContent = `${data.wind.speed} Km/h`;

    if (data.weather[0].main === "Clouds") {
      weatherImage.src = "./images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherImage.src = "./images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherImage.src = "./images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherImage.src = "./images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherImage.src = "./images/mist.png";
    }
  } else {
    alert("Enter a Valid City Name!");
  }
}

// Add event listener for button click
search.addEventListener("click", () => {
  checkWeather();
});

// Add event listener for Enter key press
inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather();
  }
});
