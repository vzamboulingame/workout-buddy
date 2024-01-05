export default function WorkoutDetails({ workout }) {
  return (
    <>
      <div className="flex flex-col p-4 m-4 bg-white rounded">
        <p className="mb-2 text-2xl">
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
