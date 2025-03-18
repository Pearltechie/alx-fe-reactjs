import { useState } from "react";

const AddRecipeForm = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});
  
    // Validation function
    const validate = () => {
      let tempErrors = {};
  
      if (!title.trim()) tempErrors.title = "Title is required";
      if (!ingredients.trim()) tempErrors.ingredients = "Ingredients are required";
      if (!steps.trim()) tempErrors.steps = "Preparation steps are required";
  
      setErrors(tempErrors);
  
      return Object.keys(tempErrors).length === 0;
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (validate()) {
        console.log("Form submitted:", { title, ingredients, steps });
        setTitle("");
        setIngredients("");
        setSteps("");
        setErrors({});
      }
    };
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Recipe Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Ingredients:</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="List ingredients separated by commas"
          />
        </div>
        <div>
          <label className="block font-medium">Preparation Steps:</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Step by step instructions"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
