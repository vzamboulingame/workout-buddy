import express from "express";

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
router.post("/", (request, response) => {
	response.json({ msg: "POST a new workout" });
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
