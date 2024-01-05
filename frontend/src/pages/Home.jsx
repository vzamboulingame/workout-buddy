import { useState, useEffect } from "react";
import { workoutApiUrl } from "../utils/apiUrl";
import Navbar from "../components/Navbar";

export default function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(workoutApiUrl);
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-6rem)] bg-slate-50 p-4 text-neutral-900">
        Home Page
      </div>
    </>
  );
}
