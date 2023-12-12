import express from "express";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workout.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use((request, response, next) => {
	console.log(request.method, request.url);
	next();
});

app.use("/api/workouts", workoutRoutes);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
