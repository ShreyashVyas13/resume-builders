import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Importing toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";  // Import the CSS for toast notifications
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      toast.error("Passwords do not match!");  // Display error toast
      return;
    }

    try {
      // Call the backend API to store user data
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.status === 201) {
        toast.success(data.message);  // Show success toast
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });  // Clear form
      } else {
        setError(data.message);
        toast.error(data.message);  // Show error toast
      }
    } catch (error) {
      setError("Server Error. Please try again.");
      toast.error("Server Error. Please try again.");  // Show error toast for server errors
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          

          {/* {error && <p className="error">{error}</p>} Optional: Display local error message */}

          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/login">Login</a>
        </p>
      </div>
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
    </div>
  );
};

export default SignUp;
