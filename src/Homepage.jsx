import React from 'react';

const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Food Blog!</h1>
      </header>
      <main>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Signup and login to access exclusive content.</li>
            <li>View recipes and their details.</li>
            <li>Bookmark your favorite recipes.</li>
            {/* Add more features here */}
          </ul>
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>
            Food Blog is your ultimate destination for discovering new recipes,
            cooking tips, and more. Whether you're a seasoned chef or a
            beginner in the kitchen, we've got something for everyone.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Food Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;