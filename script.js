const param = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : "bc7b7f1f2b370c5520ac7874ecbfba97"
}


function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&appid=${param.appid}&lang=ru`)
    .then(weather => {
        return weather.json();
    })
    .then(showWeather);
}

const cities = {
    693805 : "Симферополь",
    694423 : "Севастополь",
    688533 : "Ялта",
    692315 : "Судак",
    706524 : "Керчь"
}


function createSelectOption() {
    let mySelect = document.querySelector('.city-select');
    for (let key in cities) {
        let myOption = document.createElement('option');
        myOption.setAttribute('value', key);
        myOption.textContent = cities[key];
        mySelect.append(myOption);

        if (cities[key] == "Севастополь") {
            myOption.setAttribute('selected', '');
        }
    }    
}
createSelectOption();


function showWeather(data) {
    console.log(data);
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}&deg;`;
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.humidity').innerHTML = `влажность: ${data.main.humidity}&#37;`;
    document.querySelector('.pressure').innerHTML = `атмосферное<br>давление: ${data.main.pressure} мм. рт. ст.`;
    document.querySelector('.speed-wind').innerHTML = `скорость ветра: ${data.wind.speed} м/с`;
    document.querySelector('.icon-weather').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

getWeather();
document.querySelector('#city').onchange = getWeather;



// fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=70e1ed322b02acbc57d443dd91065f3e')
//     .then(function (resp) { return resp.json() })
//     .then(function (data) {
//         console.log(data);
//         document.querySelector('.package-name').textContent = data.name;
//         document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
//         document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
//         //https://openweathermap.org/img/wn/02d@2x.png
//         document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
//     })
//     .catch(function () {
//         // catch any errors
//     });