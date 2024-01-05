import mongoose from "mongoose";
import { workoutModel } from "../models/workoutModel.js";

// GET all workouts
export async function getAllWorkouts(request, response) {
  const allWorkouts = await workoutModel.find({}).sort({ createdAt: -1 });

  if (!allWorkouts) {
    return response.status(400).json({ error: error.message });
  }

  response.status(200).json(allWorkouts);
}

// GET a single workout
export async function getWorkout(request, response) {
  const { id } = request.params;
  const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

  if (!isValidObjectId) {
    return response.status(404).json({ error: "Invalid MongoDB ObjectId" });
  }

  const workout = await workoutModel.findById(id);

  if (!workout) {
    return response.status(404).json({ error: "Workout not found" });
  }

  response.status(200).json(workout);
}

// CREATE a new workout
export async function createWorkout(request, response) {
  const { title, sets, reps, load } = request.body;

  const createdWorkout = await workoutModel.create({
    title,
    sets,
    reps,
    load,
  });

  if (!createdWorkout) {
    return response.status(400).json({ error: error.message });
  }

  response.status(201).json(createdWorkout);
}

// UPDATE a single workout
export async function updateWorkout(request, response) {
  const { id } = request.params;

  const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

  if (!isValidObjectId) {
    return response.status(404).json({ error: "Invalid MongoDB ObjectId" });
  }

  const isValidWorkout = await workoutModel.findById(id);

  if (!isValidWorkout) {
    return response.status(404).json({ error: "Workout not found" });
  }

  const updatedWorkout = await workoutModel.findOneAndUpdate(
    { _id: id }, // filter by id
    { ...request.body }, // update with new data
    { new: true } // return updated document
  );

  if (!updatedWorkout) {
    return response.status(400).json({ error: error.message });
  }

  response.status(200).json(updatedWorkout);
}

// DELETE a single workout
export async function deleteWorkout(request, response) {
  const { id } = request.params;

  const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

  if (!isValidObjectId) {
    return response.status(404).json({ error: "Invalid MongoDB ObjectId" });
  }

  const isValidWorkout = await workoutModel.findById(id);

  if (!isValidWorkout) {
    return response.status(404).json({ error: "Workout not found" });
  }

  const deletedWorkout = await workoutModel.findOneAndDelete({ _id: id });

  if (!deletedWorkout) {
    return response.status(400).json({ error: error.message });
  }

  response.status(200).json(deletedWorkout);
}
