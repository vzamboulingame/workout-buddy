import { useState } from "react";
import { workoutApiUrl } from "../utils/apiUrl";

export function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const workout = { title, sets, reps, load };

    const response = await fetch(workoutApiUrl, {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      setError(null);
      setTitle("");
      setSets("");
      setReps("");
      setLoad("");
      console.log("new workout added:", json);
    } else {
      setError(json.error);
    }
  }

  return (
    <form className="flex flex-col gap-2 m-4" onSubmit={handleSubmit}>
      <p className="mb-2 text-xl">
        <strong>Add a New Workout</strong>
      </p>

      <label>Workout Title :</label>
      <input
        className="p-1 rounded"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Number of sets :</label>
      <input
        className="p-1 rounded"
        type="number"
        onChange={(e) => setSets(e.target.value)}
        value={sets}
      />

      <label>Number of reps :</label>
      <input
        className="p-1 rounded"
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <label>Load (in kg) :</label>
      <input
        className="p-1 rounded"
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <button
        className="px-4 py-2 mt-4 font-bold text-white bg-blue-900 rounded hover:bg-blue-700"
        type="submit">
        Add Workout
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
