import { useState, useEffect } from "react";
import { workoutApiUrl } from "../utils/apiUrl";
import { Navbar } from "../components/Navbar";
import { WorkoutDetails } from "../components/WorkoutDetails";
import { WorkoutForm } from "../components/WorkoutForm";

export function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    async function fetchWorkouts() {
      const response = await fetch(workoutApiUrl);
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    }

    fetchWorkouts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-start gap-8 min-h-[calc(100vh-6rem)] w-full bg-slate-200 p-4 text-neutral-900">
        <div className="flex flex-col w-1/4">
          {workouts?.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
        </div>
        <WorkoutForm />
      </div>
    </>
  );
}
