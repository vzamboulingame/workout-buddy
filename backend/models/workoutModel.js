import mongoose from "mongoose";

// Define the schema for the workouts
const workoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const workoutModel = mongoose.model("Workout", workoutSchema);
