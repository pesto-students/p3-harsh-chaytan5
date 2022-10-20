import http from "http";

const server = http.createServer((req, res) => {
	if (req.url.match(/\/([A-Za-z]+)\/([0-9]+)/)) {
	} else if (req.url.match(/\/([A-Za-z]+)/)) {
	} else {
		res.writeHead(404, { "Content-Type": "application/json" });
		res.end(JSON.stringify({ message: "Route Not Found!" }));
	}
});

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
