"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Captured error:", error);
  }, [error]);

  return (
    <html>
      <body className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center max-w-md p-6 bg-white rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-red-600">
            Something went wrong!
          </h1>
          <p className="mt-4 text-gray-600">
            {error.message || "An unexpected error occurred."}
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => reset()}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Try Again
            </button>

            <Link
              href="/"
              className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Go Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
