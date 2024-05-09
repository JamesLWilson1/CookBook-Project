import React from 'react';
import Recipes from './Recipes.jsx';
const RecipeListPage = ({ recipes }) => {
  return (
    <div className="main-content">
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <><li key={index}>{recipe.title}</li><div key={index} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div></>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListPage;
