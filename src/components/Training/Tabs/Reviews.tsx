"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  name: string;
  comment: string;
  rating: number;
  avatar?: string;
  date?: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Static rating summary (can make dynamic later)
  const ratingSummary = [
    { stars: 5, percent: 90 },
    { stars: 4, percent: 5 },
    { stars: 3, percent: 2 },
    { stars: 2, percent: 2 },
    { stars: 1, percent: 1 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4">Comments</h2>

      {/* Rating Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b pb-6">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold">4.0</span>
          <div className="flex">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < 4 ? "text-yellow-400" : "text-gray-300"
                  } w-6 h-6`}
                />
              ))}
          </div>
        </div>
        <p className="text-gray-500 text-sm">
          based on <span className="font-semibold">146,951</span> ratings
        </p>
      </div>

      {/* Rating Bars */}
      <div className="mt-6 space-y-2">
        {ratingSummary.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-sm w-14">
              {item.stars} <FaStar className="text-yellow-400" />
            </span>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-yellow-400 h-2 rounded"
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
            <span className="text-sm w-10 text-gray-500">{item.percent}%</span>
          </div>
        ))}
      </div>

      {/* Reviews List */}
      <div className="mt-8 space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-b pb-6 flex flex-col sm:flex-row sm:items-start gap-4"
          >
            <Image
              src={`https://i.pravatar.cc/100?img=${index + 1}`}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover"
              width={200}
              height={200}
            />

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{review.name}</h4>
                <span className="text-sm text-gray-500">
                  {review.date || "Recently"}
                </span>
              </div>
              <div className="flex mt-1">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      } w-4 h-4`}
                    />
                  ))}
              </div>
              <p className="text-gray-600 text-sm mt-2">{review.comment}</p>
              <button className="mt-2 text-sm text-red-500 hover:underline">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          className="px-3 py-1 border rounded-full text-gray-500 hover:bg-gray-100"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          &lt;
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 border rounded-full ${
              currentPage === page
                ? "bg-black text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="px-3 py-1 border rounded-full text-gray-500 hover:bg-gray-100"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 3))}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Reviews;
