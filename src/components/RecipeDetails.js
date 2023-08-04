import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <h2>Recipe Details</h2>
      <p><strong>Title:</strong> {recipe.title}</p>
      <p><strong>Ingredients:</strong></p>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient.id}>{ingredient.value}</li>
        ))}
      </ul>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
      <p><strong>Nutritional Information:</strong> {recipe.nutritionalInfo}</p>
    </div>
  );
};

export default RecipeDetails;
