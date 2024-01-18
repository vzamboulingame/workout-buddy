import { useEffect } from "react";
import { useWorkoutsContext } from "../context/WorkoutsContext";
import { workoutApiUrl } from "../utils/apiUrl";
import { Navbar } from "../components/Navbar";
import { WorkoutDetails } from "../components/WorkoutDetails";
import { WorkoutForm } from "../components/WorkoutForm";

export function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    async function fetchWorkouts() {
      const response = await fetch(workoutApiUrl);
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    }

    fetchWorkouts();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-start gap-8 min-h-[calc(100vh-6rem)] w-full bg-slate-200 py-8 px-32 text-neutral-900">
        <div className="flex flex-col w-5/6">
          {workouts?.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
        </div>
        <WorkoutForm />
      </div>
    </>
  );
}
