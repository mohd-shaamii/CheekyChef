import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import '../styles.css'; // Import your CSS file

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from API and set to state
    // Example: fetchRecipes().then(data => setRecipes(data));
  }, []);

  return (
    <div className="container">
      <h1>Featured Recipes</h1>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
