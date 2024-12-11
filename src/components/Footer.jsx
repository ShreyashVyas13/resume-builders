import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>About Resume Builder</h3>
          <p>Resume Builder helps you create professional resumes with ease. Customize your resume with pre-designed templates, download them, and impress your potential employers. Start building your resume today!</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/templates">Templates</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Replaced Newsletter Section with Services Section */}
        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li>Create Custom Resumes</li>
            <li>Download Resume in Multiple Formats</li>
            <li>Pre-designed Templates for Quick Start</li>
            <li>Easy-to-use Resume Builder Interface</li>
            <li>Free Resume Review Services</li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="contact-info">
          <p><FaEnvelope /> support@resumebuilder.com</p>
        </div>
        <p>&copy; 2024 Resume Builder. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
