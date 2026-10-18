
let cityName = document.querySelector(`.city`)
let search = document.getElementById(`search`)
let searchBtn = document.getElementById(`searchBtn`)

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = import.meta.env.VITE_API_KEY;

async function getWeatherData(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    // console.log(data);
    document.querySelector(`.temp`).textContent = ` ${Math.round(data.main.temp)}°C`;

    document.querySelector(`.country`).textContent = data.sys.country
    document.querySelector(`.humidity`).textContent = ` ${data.main.humidity}%`
    document.querySelector(`.wind`).textContent = ` ${data.wind.speed}m/s`
    cityName.textContent = data.name
}
function Searching() {

    searchBtn.addEventListener('click', () => {
        getWeatherData(search.value);
        search.value = ""
    })

    search.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            getWeatherData(search.value);
            search.value = "";
        }
    });
}
Searching()

getWeatherData('taunsa');