import express from "express";
import {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

// GET all workouts
router.get("/", getAllWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// CREATE a new workout
router.post("/", createWorkout);

// UPDATE a single workout
router.patch("/:id", updateWorkout);

// DELETE a single workout
router.delete("/:id", deleteWorkout);

export default router;
