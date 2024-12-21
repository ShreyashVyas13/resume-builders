// import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import './Header.css';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Handle scroll event
//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setIsScrolled(true); // When scrolled down more than 50px
//     } else {
//       setIsScrolled(false); // When at the top of the page
//     }
//   };

//   // Toggle mobile menu visibility
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(prevState => !prevState);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll); // Clean up on unmount
//   }, []);

//   return (
//     <div>
//       <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
//         <div className="logo">ResumeBuilder</div>
//         {/* Mobile menu icon with toggle */}
//         <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
//           {isMobileMenuOpen ? (
//             <span className="close-icon">×</span>
//           ) : (
//             <>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//             </>
//           )}
//         </div>
//         <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/features">Features</Link></li>
//           <li><Link to="/templates">Templates</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//         <div className="auth-buttons">
//           <Link to={'/login'} className="login-btn" style={{textDecoration:'none'}}>Login</Link>
//           <Link to={'/signup'} className="signup-btn" style={{textDecoration:'none'}}>Sign Up</Link>
//           {/* <button className="login-btn">Login</button>
//           <button className="signup-btn">Sign Up</button> */}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;


import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check if the user is logged in
  const navigate = useNavigate();

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // When scrolled down more than 50px
    } else {
      setIsScrolled(false); // When at the top of the page
    }
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    localStorage.setItem("isLoggedIn", false); // Set loggedIn status to false in localStorage
    setIsLoggedIn(false); // Update the state immediately
    navigate("/login"); // Redirect to login page
  };

  useEffect(() => {
    // Check if the user is logged in and update the state on every render
    const user = localStorage.getItem("user");
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"; // Read login status from localStorage
    setIsLoggedIn(loggedIn); // Update the isLoggedIn state immediately
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Clean up on unmount
  }, []); // Empty dependency array ensures it only runs on component mount

  return (
    <div>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">ResumeBuilder</div>
        {/* Mobile menu icon with toggle */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <span className="close-icon">×</span>
          ) : (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          )}
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/templates">Templates</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
          {/* Conditionally render Login and Sign Up or Logout based on isLoggedIn */}
          {!isLoggedIn ? (
            <>
              <Link to={'/login'} className="login-btn" style={{ textDecoration: 'none' }}>Login</Link>
              <Link to={'/signup'} className="signup-btn" style={{ textDecoration: 'none' }}>Sign Up</Link>
            </>
          ) : (
            <button className="logout-btn" onClick={handleLogout}>Logout</button> // Logout button
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
