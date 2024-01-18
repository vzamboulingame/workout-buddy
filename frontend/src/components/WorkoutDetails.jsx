import { useWorkoutsContext } from "../context/WorkoutsContext";
import { workoutApiUrl } from "../utils/apiUrl";

export function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();

  const deleteWorkout = async () => {
    const response = await fetch(`${workoutApiUrl}/${workout._id}`, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <>
      <div className="flex flex-col max-w-full p-4 my-4 bg-white shadow-sm rounded-xl">
        <p className="mb-2 text-xl text-blue-900">
          <strong>{workout.title}</strong>
        </p>
        <p>
          <strong>Number of sets: </strong>
          {workout.sets}
        </p>
        <p>
          <strong>Number of reps: </strong>
          {workout.reps}
        </p>
        <p>
          <strong>Load (kg): </strong>
          {workout.load}
        </p>
        <button
          type="button"
          className="px-2 py-1 mt-4 mb-2 text-white bg-red-900 rounded cursor-pointer hover:bg-red-700 w-fit"
          onClick={deleteWorkout}>
          Delete
        </button>
      </div>
    </>
  );
}
