export function WorkoutDetails({ workout }) {
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
      </div>
    </>
  );
}
