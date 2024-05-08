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
        <input type="text" placeholder="Search" className="search-bar" />
      </header>
      <div className="main-content">
  {recipes.map((recipe, index) => (
    <div key={index} className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <Link to="/RecipeListPage">View All Recipes</Link> {/* Link to RecipeListPage */}
    </div>
  ))}
</div>
    </div>
  );
};

export default Homepage;
