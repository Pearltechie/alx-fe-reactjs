
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import React from "react";
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetail from "./components/RecipeDetail";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/add-recipe" element={<AddRecipeForm />} />
    </Routes>
  </Router>
  );
}

export default App;
