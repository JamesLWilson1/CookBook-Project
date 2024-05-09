import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  

  return (
    <div className="homepage">
      <header className="header">
        <div className="header-content">
          <h1 className="title">precipitee</h1>
          <div className="buttons">
            <button className="button">Filter by Tag</button>
            <button className="button">Report</button>
            <button className="button">Search</button>
          </div>
        </div>
        <div className="homepage">
        <RecipeListPage />
      <Link to="/RecipeListPage">View All Recipes</Link> {/* Link to RecipeListPage */}
      </div>
        <input type="text" placeholder="Search" className="search-bar" />
      </header>
    </div>
  );
};

export default Homepage;
