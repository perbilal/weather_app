function getWeather() {
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("weatherResult");
  
    if (!city) {
      resultDiv.innerHTML = "Please enter a city name.";
      return;
    }
  
    const apiKey = "7018cf38ccb54349a7b74820251806";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          resultDiv.innerHTML = `<p>${data.error.message}</p>`;
        } else {
          resultDiv.innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
            <p><strong>Condition:</strong> ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="weather icon" />
            <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
            <p><strong>Wind:</strong> ${data.current.wind_kph} kph</p>
          `;
        }
      })
      .catch(error => {
        resultDiv.innerHTML = `<p>Error fetching weather data.</p>`;
        console.error(error);
      });
  }
  