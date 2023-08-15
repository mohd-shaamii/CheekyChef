import React, { useState } from 'react';
import '../styles.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import RecipeDetailsPage from './RecipeDetailsPage';
import RecipeDetails from '../components/RecipeDetails';

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [{ id: 1, value: '' }],
    instructions: '',
    cookingTime: '',
    nutritionalInfo: '',
  });

  const [showDetails, setShowDetails] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleAddIngredient = () => {
    const newIngredient = { id: Date.now(), value: '' };
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      ingredients: [...prevRecipe.ingredients, newIngredient],
    }));
  };

  const handleDeleteIngredient = id => {
    const updatedIngredients = recipe.ingredients.filter(ingredient => ingredient.id !== id);
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      ingredients: updatedIngredients,
    }));
  };

  const handleIngredientChange = (id, value) => {
    const updatedIngredients = recipe.ingredients.map(ingredient =>
      ingredient.id === id ? { ...ingredient, value } : ingredient
    );
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      ingredients: updatedIngredients,
    }));
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    // Submit recipe to API
    // Example: submitRecipe(recipe);
  };

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  return (
    <div className="container">
      <div className="create-recipe">
        <h1>Create a New Recipe</h1>
        <form className="create-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={recipe.title}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Ingredients:</label>
            {recipe.ingredients.map(ingredient => (
              <div key={ingredient.id} className="ingredient-input">
                <input
                  type="text"
                  value={ingredient.value}
                  onChange={event => handleIngredientChange(ingredient.id, event.target.value)}
                  className="input-field"
                />
                {recipe.ingredients.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleDeleteIngredient(ingredient.id)}
                    className="delete-button"
                  >
                    -
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddIngredient} className="add-button">
              +
            </button>
          </div>
          <div className="form-group">
            <label>Instructions:</label>
            <textarea
              name="instructions"
              value={recipe.instructions}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Cooking Time (minutes):</label>
            <input
              type="number"
              name="cookingTime"
              value={recipe.cookingTime}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Nutritional Information:</label>
            <input
              type="text"
              name="nutritionalInfo"
              value={recipe.nutritionalInfo}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Create Recipe
            </button>
          <Link type="submit" className="my" to="/RecipeDetailsPage">
          Show All Details
          </Link>
          </div>
        </form>
        <div className="form-group">
          {/* Add a link to the RecipeDetailsPage */}
        </div>
      </div>
      {showDetails && <RecipeDetails recipe={recipe} />}
    </div>
  );
};

export default CreateRecipe;
