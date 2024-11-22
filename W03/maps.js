// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Define the API URL with the coordinates for Trier, Germany
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=befd1c66a488e37b45b346e7c2d0d864';

// Fetch weather data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // For testing purposes
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

// Display weather data on the page
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`; // Display temperature
  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Weather icon URL
  const desc = data.weather[0].description; // Weather description
  weatherIcon.setAttribute('src', iconSrc); // Set icon source
  weatherIcon.setAttribute('alt', desc); // Set alt text
  captionDesc.textContent = desc; // Set description text
}

// Call the function to fetch and display weather data
apiFetch();
