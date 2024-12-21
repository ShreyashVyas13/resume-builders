import { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Overview");

  // Function to render dynamic content
  const renderSectionContent = () => {
    switch (activeSection) {
      case "Overview":
        return (
          <div className="overview-section">
            <h2>Overview</h2>
            <div className="stats-container">
              <div className="stat-card">
                <h3>Users</h3>
                <p>2,356 Registered Users</p>
              </div>
              <div className="stat-card">
                <h3>Feedback</h3>
                <p>127 Feedback Messages</p>
              </div>
            </div>
          </div>
        );
      case "Users":
        return (
          <div className="users-section">
            <h2>Users</h2>
            <p>View and manage registered users.</p>
          </div>
        );
      case "Feedback":
        return (
          <div className="feedback-section">
            <h2>Feedback</h2>
            <p>Check user feedback and suggestions.</p>
          </div>
        );
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Dashboard</h2>
        <ul className="sidebar-menu">
          {["Overview", "Users", "Feedback"].map((section) => (
            <li
              key={section}
              className={`menu-item ${activeSection === section ? "active" : ""}`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="welcome-section">
          <h1>Welcome to the Admin Panel</h1>
          <p>Manage and monitor your website effectively.</p>
        </div>
        {renderSectionContent()} {/* Dynamically renders the selected section */}
      </div>
    </div>
  );
};

export default AdminDashboard;
