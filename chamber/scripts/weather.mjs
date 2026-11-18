const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = 49.751606897091555;
const lon = 6.630220157041841;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aa0ac129f9892bca0de6f7e147d49c9c&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}


function displayResults(data) {
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    captionDesc.textContent = desc;
}

apiFetch();

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=aa0ac129f9892bca0de6f7e147d49c9c&units=imperial`;
async function getForecast() {
    try {
        const response = await fetch(forecastUrl);

        if (response.ok) {
            const data = await response.json();

            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayForecast(data) {
    const forecastContainer = document.querySelector('#forecast');

    forecastContainer.innerHTML = '';

    const dailyForecast = {};

    data.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0];

        if (!dailyForecast[date]) {
            dailyForecast[date] = item;
        }
    });

    Object.values(dailyForecast)
        .slice(0, 3)
        .forEach(day => {

            const date = new Date(day.dt_txt);

            const temperature = day.main.temp.toFixed(0);
            const description = day.weather[0].description;

            forecastContainer.innerHTML += `
                <div>
                    <h3>${date.toDateString()}</h3>
                    <p>Temperature: ${temperature}°F</p>
                    <p>${description}</p>
                    <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png"
                         alt="${description}">
                </div>
            `;
        });
}


getForecast();