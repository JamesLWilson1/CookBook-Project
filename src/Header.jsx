import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className='header'>
      <h1 className="product-name">Précipitée</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;