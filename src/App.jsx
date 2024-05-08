import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import RecipeListPage from './RecipeListPage.jsx';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={Homepage} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/recipes" component={RecipeListPage} />
            </Routes>
        </Router>
    );
};

export default App;