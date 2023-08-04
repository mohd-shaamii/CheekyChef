import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import UserProfile from './pages/UserProfile';
import RecipeDetailsPage from './pages/RecipeDetailsPage'; // Import the new RecipeDetailsPage

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/profile" element={<UserProfile />} />
        {/* Add a new route for RecipeDetailsPage */}
        <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
