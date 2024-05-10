import React from 'react';
import { Link } from 'react-router-dom';
import RecipeListPage from './RecipeListPage'; // Import the RecipeListPage component
import Header from './Header';

const Homepage = () => {
  

  return (
    <div className="homepage">
      <Header />
      <header className="App-Header">
        <div className="header-content">
          <div className="buttons">
            <button className="button">Filter by Tag</button>
            <button className="button">Report</button>
            <button className="button">Search</button>
            <input type="text" placeholder="Search" className="search-bar" />
          </div>
        </div>
        <div className="homepage">
        <RecipeListPage />
      <Link to="/recipes">View All Recipes</Link> {/* Link to RecipeListPage */}
      </div>
        
      </header>
    </div>
  );
};

export default Homepage;
