import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Recipes from './RecipeListPage.jsx';
import recipes from './RecipeData';

import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Recipes recipes={recipes} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                
            </Routes>
        </Router>
    );
};

export default App;