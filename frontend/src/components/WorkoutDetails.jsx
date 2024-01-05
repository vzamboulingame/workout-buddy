export function WorkoutDetails({ workout }) {
  return (
    <>
      <div className="flex flex-col max-w-3xl p-4 m-4 bg-white rounded shadow-sm">
        <p className="mb-2 text-2xl text-blue-900">
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
      </div>
    </>
  );
}
