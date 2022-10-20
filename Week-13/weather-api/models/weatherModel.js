import { fetch } from "node-fetch";

const API_KEY = "170cec7803bff371fc0fcf1e9126a03b";

async function getCurrentWeather(lat, lon) {
	const weatherRes = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	);

	const weatherData = await weatherRes.json();

	if (!weatherData.length) {
		throw new Error("ENOENT");
	}

	return weatherData;
}
