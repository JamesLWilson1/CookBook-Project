import React from 'react';
import Header from './Header';


const RecipeListPage = ({ recipes }) => {
  return (
    <div>
      <Header />  
    <div className="main-content">
      <h2>Recipes</h2>
      <div className="buttons">
            <button className="button">Filter by Tag</button>
            <button className="button">Report</button>
            <button className="button">Search</button>
            <input type="text" placeholder="Search" className="search-bar" />
          </div>
      <ul>
        {recipes && recipes.map((recipe, index) => (
          <React.Fragment key={index}>
            <li>{recipe.title}</li>
            <div className="recipe-card">
            <img src={process.env.PUBLIC_URL + recipe.imageUrl} alt={recipe.imageUrl} style={{float: 'left', marginRight: '10px',width:'100px',height:'100px',alt:'Large Pizza'}}  /> 
            
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <div className="tags">
                  {recipe.tags && recipe.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
            </div>
          </React.Fragment>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default RecipeListPage;
/*<img src={process.env.PUBLIC_URL + recipe.imageUrl} alt={recipe.title} style={{float: 'left', marginRight: '10px',width={250} height={250} alt='Large Pizza'}} />*/