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
        console.log(workouts);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-gray-200"></div>
    </>
  );
}
