// Define the parameters for the API request
const param = {
    url: "https://api.openweathermap.org/data/2.5/",
    appid: "ebbeb5bc4f727827a389450643396c48"
};

// Define an interface for the cities object
interface ICities {
    [key: string]: string;
}

// Define the cities object with city IDs and names
const cities: ICities = {
    7910041: "Hamilton City",
    2934683: "Duisdorf",
    2159684: "Longford",
    4923747: "Montpelier",
    4923796: "Morocco",
};

// Get the select element from the DOM
const selectElem = document.querySelector('#city') as HTMLSelectElement;

// Function to add cities to the select element
function addCity(): void {
    for (let key in cities) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = cities[key];
        selectElem.appendChild(option);
    }
}

// Call the function to populate the select element with cities
addCity();

// Function to fetch weather data for the selected city
function getWeather(): void {
    const cityId = selectElem.value; // Get the selected city ID
    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(showWeather)
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Function to display weather data in the DOM
function showWeather(data: any): void {
    const out1 = document.querySelector('.out1') as HTMLElement;
    const out2 = document.querySelector('.out2') as HTMLElement;
    const out3 = document.querySelector('.out3') as HTMLElement;
    const out4 = document.querySelector('.out4') as HTMLElement;
    const out5 = document.querySelector('.out5') as HTMLElement;
    const out6 = document.querySelector('.out6') as HTMLElement;

    out1.innerHTML = 'City name: ' + data.name;
    out2.innerHTML = 'Weather: ' + data.weather[0].main + '<br>Description: ' + data.weather[0].description;
    out3.innerHTML = 'Temperature: ' + Math.floor(data.main.temp - 273) + '&deg;C';
    out4.innerHTML = 'Icon: ' + `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" width=50px height=50px>`;
    out5.innerHTML = 'Wind: ' + data.wind.deg + '° with speed: ' + data.wind.speed + ' km/h';
    out6.innerHTML = 'Pressure: ' + data.main.pressure + ' hPa';

    console.log(data);
}

// Add an event listener to the select element to fetch weather data when the city changes
selectElem.addEventListener('change', getWeather);

// Fetch weather data for the default city when the page loads
getWeather();