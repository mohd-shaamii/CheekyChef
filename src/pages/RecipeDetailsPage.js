import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../components/RecipeDetails'; // Adjust the import path based on your file structure

const RecipeDetailsPage = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === id);

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="container" style={{ backgroundColor: '#365D50' }}>
      <div className="recipe-details">
        <h2>Recipe Details</h2>
        <p>Title: {recipe.title}</p>
        <p>Ingredients: {recipe.ingredients.map(ingredient => ingredient.value).join(', ')}</p>
        <p>Instructions: {recipe.instructions}</p>
        <p>Cooking Time: {recipe.cookingTime} minutes</p>
        <p>Nutritional Information: {recipe.nutritionalInfo}</p>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
