// CardSkeleton.jsx
import React from "react";

const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
      {/* Image Skeleton */}
      <div className="h-64 bg-gray-300"></div>

      {/* Content */}
      <div className="p-6">
        {/* Title Skeleton */}
        <div className="h-8 bg-gray-300 rounded-lg mb-3 w-3/4"></div>

        {/* Tags Skeleton */}
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded-full w-20"></div>
          <div className="h-6 bg-gray-200 rounded-full w-24"></div>
        </div>

        {/* Meta Info Skeleton */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 bg-gray-200 rounded-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-12 mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-10"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 bg-gray-200 rounded-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-12 mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-10"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 bg-gray-200 rounded-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-12 mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-10"></div>
          </div>
        </div>

        {/* Calories Skeleton */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 mb-4">
          <div className="h-4 bg-gray-200 rounded w-32"></div>
          <div className="h-5 bg-gray-300 rounded w-16"></div>
        </div>

        {/* Button Skeleton */}
        <div className="h-12 bg-gray-300 rounded-xl w-full"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
