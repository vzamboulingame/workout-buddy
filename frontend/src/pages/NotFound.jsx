import { Navbar } from "../components/Navbar";

export function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-6rem)] bg-slate-50 p-4 text-neutral-900">
        NotFound Page
      </div>
    </>
  );
}
