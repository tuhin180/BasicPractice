import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "./Hooks/CustomHooks";

const RecipesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/recipes/${id}`,
  );
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl font-semibold text-gray-600">
          Loading recipe...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl font-semibold text-red-600">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)} // ✅ Goes back to previous page
          className="mb-6 flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold"
        >
          ← Back to Recipes
        </button>

        {/* Image */}
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg"
        />

        {/* Title & Info */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.name}</h1>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold">
              {data.cuisine}
            </span>
            <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-semibold">
              ⭐ {data.rating}
            </span>
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
              {data.difficulty}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center border-t pt-6">
            <div>
              <p className="text-3xl font-bold text-orange-500">
                {data.prepTimeMinutes}m
              </p>
              <p className="text-gray-500">Prep Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">
                {data.cookTimeMinutes}m
              </p>
              <p className="text-gray-500">Cook Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">
                {data.servings}
              </p>
              <p className="text-gray-500">Servings</p>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🛒 Ingredients
          </h2>
          <ul className="space-y-2">
            {data.ingredients?.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📋 Instructions
          </h2>
          <ol className="space-y-4">
            {data.instructions?.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <p className="text-gray-600 pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
