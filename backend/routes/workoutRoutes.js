import express from "express";
import workoutModel from "../models/workoutModel.js";

const router = express.Router();

// GET all workouts
router.get("/", (request, response) => {
	response.json({ msg: "GET all workouts" });
});

// GET a single workout
router.get("/:id", (request, response) => {
	response.json({ msg: "GET a single workout" });
});

// POST a new workout
router.post("/", async (request, response) => {
	try {
		const { title, reps, load } = request.body;

		const newWorkout = await workoutModel.create({
			title,
			reps,
			load,
		});

		response.status(201).json(newWorkout);
	} catch (error) {
		response.status(400).json({ error: error.message });
	}
});

// DELETE a single workout
router.delete("/:id", (request, response) => {
	response.json({ msg: "DELETE a single workout" });
});

// UPDATE a single workout
router.patch("/:id", (request, response) => {
	response.json({ msg: "UPDATE a single workout" });
});

export default router;
