import http from "http";
import { getWeather } from "./controllers/weatherController.js";

const server = http.createServer((req, res) => {
	if (req.url.match(/\/([A-Za-z]+)\/([0-9]+)/)) {
		const city = req.url.split("/")[1];
		const days = req.url.split("/")[2];
	} else if (req.url.match(/\/([A-Za-z]+)/)) {
		const city = req.url.split("/")[1];

		getWeather(req, res, city);
	} else {
		res.writeHead(404, { "Content-Type": "application/json" });
		res.end(JSON.stringify({ message: "Route Not Found!" }));
	}
});

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
