import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Routes
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import UserProfile from './pages/UserProfile';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Wrap Routes around your Route components */}
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
