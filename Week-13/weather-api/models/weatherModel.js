import fetch from "node-fetch";

const API_KEY = "170cec7803bff371fc0fcf1e9126a03b";

async function getLatLong(city) {
	const latLongRes = await fetch(
		`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
	);

	const latLongData = await latLongRes.json();

	if (!latLongData.length) {
		throw new Error("ENOENT");
	}

	let lat = latLongData[0].lat;
	let lon = latLongData[0].lon;

	return { lat, lon };
}

async function getCurrentWeather(lat, lon) {
	const weatherRes = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	);

	const weatherData = await weatherRes.json();

	return weatherData;
}

// @desc  get weather forecast of 5 days for a location
async function getWeatherForecast(lat, lon) {
	const forecastRes = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	);

	const forecastData = await forecastRes.json();

	return forecastData;
}

export { getLatLong, getCurrentWeather, getWeatherForecast };
