import { Navbar } from "../components/Navbar";

export function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-6rem)] w-full bg-slate-200 py-8 px-32 text-neutral-900">
        <p className="text-2xl font-bold">NotFound Page</p>
      </div>
    </>
  );
}
