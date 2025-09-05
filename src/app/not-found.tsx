"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-gray-600">Page not found</p>
        <Link
          href="/"
          className="mt-6 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
