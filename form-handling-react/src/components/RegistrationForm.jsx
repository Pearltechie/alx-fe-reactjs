import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    let validationErrors = {};

    if (!username) {
      validationErrors.username = "Username is required";
    }
    if (!email) {
      validationErrors.email = "Email is required";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }

    // If there are errors, update state and stop submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", { username, email, password });
    // Clear the form after submission
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
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

