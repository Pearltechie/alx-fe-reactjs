import { useState } from "react";

const RegistrationForm = () => {
  // Define state variables for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }
    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username} 
          onChange={(e) => setUsername(e.target.value)}  
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}  
          onChange={(e) => setEmail(e.target.value)}  
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}  
          onChange={(e) => setPassword(e.target.value)}  
          required
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

