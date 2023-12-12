import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (request, response) => {
	response.json({ msg: "Welcome to the app !" });
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
