import { useState } from "react";
import { useWorkoutsContext } from "../context/WorkoutsContext";
import { workoutApiUrl } from "../utils/apiUrl";

export function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

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
      setEmptyFields([]);
      setError(null);
      setTitle("");
      setSets("");
      setReps("");
      setLoad("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    } else {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
  }

  return (
    <form className="flex flex-col w-1/6 gap-2 m-4" onSubmit={handleSubmit}>
      <p className="mb-2 text-xl">
        <strong>Add a New Workout</strong>
      </p>

      <label>Workout Title :</label>
      <input
        className={`p-1 rounded ${
          emptyFields.includes("title") ? "input-error" : ""
        }`}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Number of sets :</label>
      <input
        className={`p-1 rounded ${
          emptyFields.includes("sets") ? "input-error" : ""
        }`}
        type="number"
        onChange={(e) => setSets(e.target.value)}
        value={sets}
      />

      <label>Number of reps :</label>
      <input
        className={`p-1 rounded ${
          emptyFields.includes("reps") ? "input-error" : ""
        }`}
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <label>Load (in kg) :</label>
      <input
        className={`p-1 rounded ${
          emptyFields.includes("load") ? "input-error" : ""
        }`}
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <button
        className="px-4 py-2 mt-4 font-bold text-white bg-blue-900 rounded hover:bg-blue-700"
        type="submit">
        Add Workout
      </button>
      {error && <div className="div-error">{error}</div>}
    </form>
  );
}
