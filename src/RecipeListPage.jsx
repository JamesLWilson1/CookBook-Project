

const RecipeListPage = [
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

  export default RecipeListPage;





/*
const SignupForm = () => {
  // State for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to create a new user
    // You can use fetch or a library like axios for this purpose
    // Example:
    // fetch('/api/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({ username, email, password }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
    console.log('Form submitted:', { username, email, password });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;

*/