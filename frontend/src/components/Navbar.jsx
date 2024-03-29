import { Link } from "react-router-dom";
import dumbbellSvg from "../images/dumbbell-gym.svg";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between h-24 px-32 py-2 text-neutral-900">
      <Link
        className="flex items-center justify-between gap-4 transition duration-150 text-neutral-900 hover:opacity-50"
        to="/">
        <img src={dumbbellSvg} alt="Dumbbell logo" width={50} height={50} />
        <p className="text-4xl font-bold">Workout Buddy</p>
      </Link>
    </nav>
  );
}
