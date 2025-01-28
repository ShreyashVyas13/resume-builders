import { Navigate } from "react-router-dom"; // Import Navigate to handle redirection

const ProtectedRoute = ({ children }) => {
  // Check if the user is logged in as admin
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

  // If not logged in, redirect to the login page
  if (!isAdminLoggedIn) {
    return <Navigate to="/admin" />; // Redirect to the login page
  }

  // If logged in, render the protected component (children)
  return children;
};

export default ProtectedRoute;
