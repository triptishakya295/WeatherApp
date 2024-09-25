const apiKey = '0e9d3c6904a420861ef320d0819b5bb4';  // Replace with your OpenWeatherMap API Key

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayWeather(data) {
    const cityName = document.getElementById("cityName");
    const temp = document.getElementById("temp");
    const desc = document.getElementById("desc");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");
    const weatherInfo = document.getElementById("weatherInfo");

    cityName.textContent = data.name;
    temp.textContent = `Temperature: ${data.main.temp}°C`;
    desc.textContent = `Description: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    weatherInfo.style.display = "block";
}
