const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = 49.751606897091555;
const lon = 6.630220157041841;
const apiKey = 'aa0ac129f9892bca0de6f7e147d49c9c';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
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
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

apiFetch();
