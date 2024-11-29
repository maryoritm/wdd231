const apiKey = 'befd1c66a488e37b45b346e7c2d0d864';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Veracruz&units=imperial&appid=${apiKey}`;

fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Veracruz&units=imperial&appid=${apiKey}`;
        
        document.getElementById('weather-info').innerHTML = `
            <p>Current temperature: ${temp}°F</p>
            <p>Weather: ${description}</p>
        `;

        // Load 3-day forecast
        fetch(forecastUrl)
            .then(response => response.json())
            .then(forecast => {
                let forecastHTML = '<h3>3-Day Forecast</h3>';
                forecast.list.slice(0, 3).forEach(day => {
                    forecastHTML += `<p>${new Date(day.dt * 1000).toLocaleDateString()}: ${day.main.temp}°F</p>`;
                });
                document.getElementById('weather-info').innerHTML += forecastHTML;
            });
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
