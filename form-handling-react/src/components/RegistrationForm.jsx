import React, { useState } from "react";

const RegistrationForm = () => {
    // Managing form state with useState
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    // State for validation messages
    const [errors, setErrors] = useState({});

    // Handles input changes
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    // Handles form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = {};

        // Basic validation
        if (!formData.username) validationErrors.username = "Username is required!";
        if (!formData.email) validationErrors.email = "Email is required!";
        if (!formData.password) validationErrors.password = "Password is required!";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form submitted:", formData);
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
            </div>
            
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
