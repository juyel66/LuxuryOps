import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#05070B] text-white px-4">
      <h2 className="mb-4 text-5xl font-semibold">404</h2>
      <p className="max-w-md mb-6 text-center text-gray-400">
        Page not found
      </p>
      <Link
        href="/"
        className="bg-[#C89B3C] text-white px-6 py-2 rounded-md font-medium hover:opacity-90"
      >
        Go Home
      </Link>
    </div>
  );
}
