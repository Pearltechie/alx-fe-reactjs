import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
        <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
