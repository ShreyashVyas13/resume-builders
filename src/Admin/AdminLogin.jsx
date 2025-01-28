import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { ToastContainer, toast } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import "./AdminLogin.css";

const AdminLogin = () => {
  // State to store the input values
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Use navigate from react-router-dom to redirect
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Check if name and password match the hardcoded credentials
    if (name === "admin" && password === "admin@123") {
      toast.success("Login Successful"); // Show success toast

      // Store login status in localStorage
      localStorage.setItem("isAdminLoggedIn", "true");

      // Delay the redirect by 2 seconds
      setTimeout(() => {
        navigate("/admindashboard"); // Redirect to Admin Dashboard
      }, 2000);
    } else {
      toast.error("Invalid username or password"); // Show error toast
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Admin Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              className="input-field"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
      <ToastContainer /> {/* This will display the toast notifications */}
    </div>
  );
};

export default AdminLogin;
