import express from "express";

// Express app
const app = express();

// Listening for requests
app.listen(4000, () => {
	console.log("Listening on port 4000");
});
