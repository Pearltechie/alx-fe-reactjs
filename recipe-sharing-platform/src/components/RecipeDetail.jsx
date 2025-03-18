import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import recipesData from '../data.json'; // Import the mock data

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe based on ID
    const selectedRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center text-red-500">Recipe not found!</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md" />
      <h1 className="text-2xl font-bold text-gray-900 mt-4">{recipe.title}</h1>
      <p className="text-gray-600 mt-2">{recipe.summary}</p>

      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc list-inside text-gray-700">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-4">Instructions</h2>
      <ol className="list-decimal list-inside text-gray-700">
        {recipe.instructions?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
