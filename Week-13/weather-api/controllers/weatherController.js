import {
	getLatLong,
	getCurrentWeather,
	getWeatherForecast,
} from "../models/weatherModel.js";

export async function getWeather(req, res, city) {
	try {
		const latLong = await getLatLong(city);

		const currentWeather = await getCurrentWeather(latLong.lat, latLong.lon);

		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(currentWeather));
	} catch (e) {
		if (e.message === "ENOENT") {
			res.writeHead(404, { "Content-Type": "application/json" });
			res.end(
				JSON.stringify({ message: `Error City Not Found: ${e.message}` })
			);
		} else {
			res.writeHead(400, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ message: `Error: ${e.message}` }));
		}
	}
}
