import "./styles.css";

const API_KEY = 'D82Z94FJ9Q7CBMRB5RQH2M26U';

function toCelsius(temp) {
    return (Math.round((temp - 32) * 5 / 9 * 10) / 10).toString();
}

async function getWeatherData(location) {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

    try {
        const response = await fetch(url, {mode: 'cors'});
        const weatherData = await response.json();

        const location = weatherData.address;
        const tempF = weatherData.currentConditions.temp;
        const tempC = toCelsius(Number(tempF));
        const feelsLike = weatherData.currentConditions.feelslike;
        const humidity = weatherData.currentConditions.humidity;
        const windSpeed = weatherData.currentConditions.windspeed;
        const icon = weatherData.currentConditions.icon;

        console.log("Location: " + location);
        console.log("Temp: " + tempF + "F / " + tempC +"C");
        console.log("Feels Like: " + feelsLike + "F / " + toCelsius(Number(feelsLike)) +"C");
        console.log("Humidity: " + humidity + '%');
        console.log("Wind speed: " + windSpeed + " m/s");
        console.log("Icon: " + icon);
    } catch (error) {

    }
}

getWeatherData('bangkok');