import React from "react";

const Card = ({ card }) => {
  return (
    <>
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Difficulty Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800 shadow-md">
            {card.difficulty}
          </div>
          {/* Rating */}
          <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
            <span>⭐</span>
            <span>{card.rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-orange-600 transition-colors">
            {card.name}
          </h3>

          {/* Cuisine & Meal Type */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
              {card.cuisine}
            </span>
            {card.mealType?.map((meal, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {meal}
              </span>
            ))}
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-3 gap-4 mb-4 text-center">
            <div className="flex flex-col">
              <span className="text-2xl mb-1">⏱️</span>
              <span className="text-xs text-gray-500 font-medium">Prep</span>
              <span className="text-sm font-bold text-gray-900">
                {card.prepTimeMinutes}m
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl mb-1">🍳</span>
              <span className="text-xs text-gray-500 font-medium">Cook</span>
              <span className="text-sm font-bold text-gray-900">
                {card.cookTimeMinutes}m
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl mb-1">🍽️</span>
              <span className="text-xs text-gray-500 font-medium">
                Servings
              </span>
              <span className="text-sm font-bold text-gray-900">
                {card.servings}
              </span>
            </div>
          </div>

          {/* Calories */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <span className="text-gray-600 text-sm font-medium">
              Calories per serving
            </span>
            <span className="text-lg font-bold text-orange-600">
              {card.caloriesPerServing} cal
            </span>
          </div>

          {/* View Recipe Button */}
          <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md">
            View Recipe
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
