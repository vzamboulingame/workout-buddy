import mongoose from "mongoose";
import workoutModel from "../models/workoutModel.js";

// Check if id is a valid MongoDB ObjectId
const isValidObjectId = (id, response) => {
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return response
			.status(404)
			.json({ error: "The id is not a valid MongoDB ObjectId" });
	}
};

// GET all workouts
export const getAllWorkouts = async (request, response) => {
	try {
		const allWorkouts = await workoutModel.find({}).sort({ createdAt: -1 });

		response.status(200).json(allWorkouts);
	} catch (error) {
		response.status(400).json({ error: error.message });
	}
};

// GET a single workout
export const getWorkout = async (request, response) => {
	try {
		const { id } = request.params;

		isValidObjectId(id, response);

		const workout = await workoutModel.findById(id);

		response.status(200).json(workout);
	} catch (error) {
		response.status(400).json({ error: error.message });
	}
};

// CREATE a new workout
export const createWorkout = async (request, response) => {
	try {
		const { title, reps, load } = request.body;

		const createdWorkout = await workoutModel.create({
			title,
			reps,
			load,
		});

		response.status(201).json(createdWorkout);
	} catch (error) {
		response.status(400).json({ error: error.message });
	}
};

// UPDATE a single workout
export const updateWorkout = async (request, response) => {
	try {
		const { id } = request.params;

		isValidObjectId(id, response);

		const updatedWorkout = await workoutModel.findByIdAndUpdate(
			{ _id: id }, // filter by id
			{ ...request.body }, // update with new data
			{ new: true }, // return updated document
		);

		response.status(200).json(updatedWorkout);
	} catch (error) {
		response.status(400).json({ error: error.message });
	}
};

// DELETE a single workout
export const deleteWorkout = async (request, response) => {
	try {
		const { id } = request.params;

		isValidObjectId(id, response);

		const deletedWorkout = await workoutModel.deleteOne({ _id: id });

		response.status(200).json(deletedWorkout);
	} catch (error) {
		response.status(400).json({ error: error.message });
	}
};
