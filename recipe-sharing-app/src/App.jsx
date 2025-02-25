import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit-recipe/:id" element={<AddRecipeForm />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
