import { Link } from "react-router-dom";
import dumbbellSvg from "../images/dumbbell-gym.svg";

export default function Navbar() {
	return (
		<nav className="flex h-24 items-center justify-between px-4 py-2 text-neutral-900">
			<Link
				className="flex items-center justify-between gap-4 transition duration-150 text-neutral-900 hover:opacity-50"
				to="/"
			>
				<img src={dumbbellSvg} alt="Dumbbell logo" width={50} height={50} />
				<p className="text-4xl font-bold">Workout Buddy</p>
			</Link>
		</nav>
	);
}
