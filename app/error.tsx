"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#05070B] text-white px-4">
      <h2 className="mb-4 text-3xl font-semibold">
        Something went wrong
      </h2>

      <p className="max-w-md mb-6 text-center text-white">
        {error.message || "Unexpected error occurred"}
      </p>

      <button
        onClick={() => reset()}
        className="bg-[#C89B3C] text-black px-6 py-2 rounded-md font-medium hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}