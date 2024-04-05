const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "ebbeb5bc4f727827a389450643396c48"
    // "appid": "ebbeb5bc4f727827a389450643396c48"
}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const cities = {
    7910041: "Hamilton City",
    2934683: "Duisdorf",
    2159684: "Longford",
    4923747: "Montpelier",
    4923796: "Morocco",
}
const selectElem = document.querySelector('#city');
function addCity() {
    for (let key in cities) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = cities[key];
        selectElem.appendChild(option);
    }
}
addCity()

function getWeather() {
    let cityId = selectElem.value;
    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
    console.log(cityId)
}
getWeather();

function showWeather(data) {
    console.log(data);
    console.log(data.name)
    let out = document.querySelector('.out');
    console.log(out)
    out.innerHTML = data.weather;
}

document.querySelector('#city').onchange = getWeather;
