const express = require("express");
const app = express();

const http = require("http").Server(app);
const cors = require("cors");

const socketIO = require("socket.io")(http, {
	cors: { origin: true, methods: ["GET", "POST"] },
});

app.use(cors());

const PORT = 4200;

socketIO.on("connection", (socket) => {
	console.log(`User: ${socket.id} has connected...`);

	socket.on("disconnect", () => {
		console.log(`A user has disconnected.`);
	});
});

app.get("/io", (req, res) => {
	res.send("Hello from Socket.io server!");
});

http.listen(PORT, () => {
	console.log(`Socket.io server listening on port ${PORT}...`);
});
