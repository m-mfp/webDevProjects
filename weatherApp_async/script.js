const weatherIcon = document.getElementById("weather-icon")
const mainTemperature = document.getElementById("main-temperature")
const feelsLike = document.getElementById("feels-like")
const humidity = document.getElementById("humidity")
const windSpeed = document.getElementById("wind")
const windGust = document.getElementById("wind-gust")
const weatherMain = document.getElementById("weather-main")
const selectedLocation = document.getElementById("location")

const getWeatherBtn = document.getElementById("get-weather")
const selectBtn = document.getElementById("select-btn")

console.log(selectBtn.value)

async function getWeather(city) {
    const url = 'https://weather-proxy.freecodecamp.rocks/api/city/' + city
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (err) {console.log(err)}
}

getWeatherBtn.addEventListener("click", (e) => {
    e.preventDefault()
    showWeather(selectBtn.value)
})

async function showWeather(city) {
    try {
        const data = await getWeather(city)
        if (!data) {alert('Something went wrong, please try again later')}
        const {wind, weather, main, name} = data
        weatherIcon.src = weather[0].icon || ''
        mainTemperature.innerText = main.temp || 'N/A'
        feelsLike.innerText = main.feels_like || 'N/A'
        humidity.innerText = main.humidity || 'N/A'
        windSpeed.innerText = wind.speed || 'N/A'
        windGust.innerText = wind.gust || 'N/A';
        weatherMain.innerText = weather[0].main || 'N/A'
        selectedLocation.innerText = name || city
    } catch (err) {console.log(err)}
}