const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "ebbeb5bc4f727827a389450643396c48"
    // "appid": "ebbeb5bc4f727827a389450643396c48"
}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const cities = {  // обьект с индеком городов
    7910041: "Hamilton City",
    2934683: "Duisdorf",
    2159684: "Longford",
    4923747: "Montpelier",
    4923796: "Morocco",
}
let selectElem = document.querySelector('#city');//элемент select
function addCity() {//функция которая добавляет города в select
    for (let key in cities) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = cities[key];
        selectElem.appendChild(option);
    }
}
addCity()


function getWeather() {//фунцкия которая отображает погоду
    let cityId = document.querySelector('#city').value;//значения выбранного option
    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)//fetch запрос  которые возвращает обьект с данными о погоде выбранного города
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}
getWeather();
function showWeather(data) {
    let out1 = document.querySelector('.out1');
    let out2 = document.querySelector('.out2');
    let out3 = document.querySelector('.out3');
    let out4 = document.querySelector('.out4');
    let out5 = document.querySelector('.out5');
    let out6 = document.querySelector('.out6');
    out1.innerHTML = 'City name:' + data.name;
    out2.innerHTML = 'Weather:' + data.weather[0].main + '<br>' + ' Description: ' + data.weather[0].description;
    out3.innerHTML = 'Temperature: ' + Math.floor(data.main.temp - 273) + '&deg';
    out4.innerHTML = 'Icon: ' + `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" width=50px height=50px>`;
    out5.innerHTML = 'Wind: ' + data.wind.deg + "deg with speed:" + data.wind.speed + 'km/h';
    out6.innerHTML = 'Pressure: ' + data.main.pressure + 'hPa';

    console.log(data)
}
document.querySelector('#city').onchange = getWeather;

