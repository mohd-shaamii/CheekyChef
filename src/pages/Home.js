import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer'; // Import the Footer component
import '../styles.css'; // Import your CSS file

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from API and set to state
    // Example: fetchRecipes().then(data => setRecipes(data));
  }, []);

  return (
    <div className="home-container">
      <div className="background-image"></div> {/* This will be the background image */}
      <div className="content">
        <h1 className='a'>Search for Something yummy!</h1>
        <div className="recipe-list">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Home;
