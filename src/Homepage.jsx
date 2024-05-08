import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const recipes = [
    {
    id: 1,
    title: "Spaghetti Carbonara",
    description: "Classic Italian pasta dish with bacon, eggs, and cheese.",
    ingredients: ["Spaghetti", "Bacon", "Eggs", "Parmesan cheese", "Black pepper"],
    instructions: "Cook spaghetti according to package instructions. In a pan, cook bacon until crispy. In a bowl, whisk eggs and Parmesan cheese. Once spaghetti is cooked, drain and add to the pan with bacon. Quickly add the egg and cheese mixture, stirring constantly until the sauce thickens. Serve immediately with a sprinkle of black pepper.",
    imageUrl: "https://example.com/spaghetti-carbonara.jpg",
    tags: ["Italian", "Pasta", "Easy"],
  },
  {
    id: 2,
    title: "Chicken Curry",
    description: "A flavorful Indian curry with tender chicken and aromatic spices.",
    ingredients: ["Chicken", "Onion", "Tomato", "Ginger", "Garlic", "Curry powder", "Coconut milk"],
    instructions: "In a pan, heat oil and sauté onions until golden brown. Add ginger and garlic paste and cook until fragrant. Add diced tomatoes and cook until softened. Add chicken pieces and cook until browned. Add curry powder and coconut milk, then simmer until chicken is cooked through and sauce thickens. Serve hot with rice or naan bread.",
    imageUrl: "https://example.com/chicken-curry.jpg",
    tags: ["Indian", "Curry", "Spicy"],
  },
  // Add more recipe objects as needed
];

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
