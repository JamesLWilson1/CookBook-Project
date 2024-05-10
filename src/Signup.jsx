import React, { useState } from 'react';
import Header from './Header';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend for signup
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <Header />
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          className="signup-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          className="signup-input"
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;