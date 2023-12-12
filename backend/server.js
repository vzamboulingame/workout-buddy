import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workout.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI;

app.use(express.json());

app.use((request, response, next) => {
	console.log(request.method, request.url);
	next();
});

app.use("/api/workouts", workoutRoutes);

mongoose
	.connect(mongoURI)
	.then(() => {
		console.log("Connected to MongoDB");
		app.listen(port, () => {
			console.log(`App listening on port ${port}`);
		});
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB : ", error);
	});
