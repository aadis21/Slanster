"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

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
      <body className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-50 to-yellow-50">
        <div className="text-center p-8 bg-white rounded-3xl shadow-xl max-w-sm">
          <AlertCircle className="mx-auto text-red-500 w-16 h-16 mb-4" />
          <h1 className="text-3xl font-bold text-red-600 mb-2">
            Something went wrong!
          </h1>
          <p className="text-gray-600 mb-6">
            {error.message || "An unexpected error occurred."}
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => reset()}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
            >
              Try Again
            </button>

            <Link
              href="/"
              className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-200"
            >
              Go Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
