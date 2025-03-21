import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import RecipeCard from "./RecipeCard";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetching data from the JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="container mx-auto p-6 hover rounded shadow">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 md">Recipe Sharing Platform</h1>
      <Link to="/add-recipe">
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Add New Recipe
        </button>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
        <div>
          <RecipeCard key={recipe.id} recipe={recipe} />
          <Link to={`/recipe/${recipe.id}`} className="text-blue-500 mt-2 block">
            View Recipe →
          </Link>
        </div>
        ))}
      </div>
    </div>
  );
};


export default HomePage;
    
    