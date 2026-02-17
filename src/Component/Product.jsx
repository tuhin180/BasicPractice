import React from "react";
import { useFetch } from "./Hooks/CustomHooks";
import Card from "./Card";
import CardSkeleton from "./CardSkeliton";

const Product = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Loading Recipes...
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Show 8 skeleton cards */}
            {[...Array(8)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            Error Loading Recipes
          </h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>here is all the product </h1>
      <div className="grid grid-cols-4 gap-2 py-3">
        {data.recipes?.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Product;
