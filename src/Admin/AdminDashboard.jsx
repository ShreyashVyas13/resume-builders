// import { useState } from "react";
// import "./AdminDashboard.css";

// const AdminDashboard = () => {
//   const [activeSection, setActiveSection] = useState("Overview");

//   // Function to render dynamic content
//   const renderSectionContent = () => {
//     switch (activeSection) {
//       case "Overview":
//         return (
//           <div className="overview-section">
//             <h2>Overview</h2>
//             <div className="stats-container">
//               <div className="stat-card">
//                 <h3>Users</h3>
//                 <p>2,356 Registered Users</p>
//               </div>
//               <div className="stat-card">
//                 <h3>Feedback</h3>
//                 <p>127 Feedback Messages</p>
//               </div>
//             </div>
//           </div>
//         );
//       case "Users":
//         return (
//           <div className="users-section">
//             <h2>Users</h2>
//             <p>View and manage registered users.</p>
//           </div>
//         );
//       case "Feedback":
//         return (
//           <div className="feedback-section">
//             <h2>Feedback</h2>
//             <p>Check user feedback and suggestions.</p>
//           </div>
//         );
//       default:
//         return <div>Select a section from the sidebar.</div>;
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <h2 className="sidebar-title">Admin Dashboard</h2>
//         <ul className="sidebar-menu">
//           {["Overview", "Users", "Feedback"].map((section) => (
//             <li
//               key={section}
//               className={`menu-item ${activeSection === section ? "active" : ""}`}
//               onClick={() => setActiveSection(section)}
//             >
//               {section}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="welcome-section">
//           <h1>Welcome to the Admin Panel</h1>
//           <p>Manage and monitor your website effectively.</p>
//         </div>
//         {renderSectionContent()} {/* Dynamically renders the selected section */}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import { useState, useEffect } from "react";
// import axios from "axios"; // Axios for API calls
// import "./AdminDashboard.css";

// const AdminDashboard = () => {
//   const [activeSection, setActiveSection] = useState("Overview");
//   const [overviewData, setOverviewData] = useState({ users: 0, feedback: 0 });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

// // Fetch data for the "Overview" section
// useEffect(() => {
//   if (activeSection === "Overview") {
//     const fetchOverviewData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios.get("http://localhost:5000/api/admin/overview");
//         setOverviewData(response.data);
//       } catch (err) {
//         setError("Failed to fetch overview data.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOverviewData();
//   }
// }, [activeSection]);

//   // Function to render dynamic content
//   const renderSectionContent = () => {
//     switch (activeSection) {
//       case "Overview":
//         return (
//           <div className="overview-section">
//             <h2>Overview</h2>
//             {loading ? (
//               <p>Loading...</p>
//             ) : error ? (
//               <p className="error">{error}</p>
//             ) : (
//               <div className="stats-container">
//                 <div className="stat-card">
//                   <h3>Users</h3>
//                   <p>{overviewData.users} Registered Users</p>
//                 </div>
//                 <div className="stat-card">
//                   <h3>Feedback</h3>
//                   <p>{overviewData.feedback} Feedback Messages</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         );
//       case "Users":
//         return (
//           <div className="users-section">
//             <h2>Users</h2>
//             <p>View and manage registered users.</p>
//           </div>
//         );
//       case "Feedback":
//         return (
//           <div className="feedback-section">
//             <h2>Feedback</h2>
//             <p>Check user feedback and suggestions.</p>
//           </div>
//         );
//       default:
//         return <div>Select a section from the sidebar.</div>;
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <h2 className="sidebar-title">Admin Dashboard</h2>
//         <ul className="sidebar-menu">
//           {["Overview", "Users", "Feedback"].map((section) => (
//             <li
//               key={section}
//               className={`menu-item ${activeSection === section ? "active" : ""}`}
//               onClick={() => setActiveSection(section)}
//             >
//               {section}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="welcome-section">
//           <h1>Welcome to the Admin Panel</h1>
//           <p>Manage and monitor your website effectively.</p>
//         </div>
//         {renderSectionContent()} {/* Dynamically renders the selected section */}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashboard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Overview");
  const [overviewData, setOverviewData] = useState({ users: 0, feedback: 0 });
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [feedbackData, setFeedbackData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // To manage modal visibility
  const [currentUser, setCurrentUser] = useState(null); // To store user data for editing
  const [currentFeedback, setCurrentFeedback] = useState(null);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  // Fetch data for the "Overview" section
  useEffect(() => {
    if (activeSection === "Overview") {
      const fetchOverviewData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(
            "http://localhost:5000/api/admin/overview"
          );
          setOverviewData(response.data);
        } catch (err) {
          setError("Failed to fetch overview data.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchOverviewData();
    }
  }, [activeSection]);

  // Fetch user data when "Users" section is active
  useEffect(() => {
    if (activeSection === "Users") {
      const fetchUserData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(
            "http://localhost:5000/api/admin/users"
          );
          setUserData(response.data);
        } catch (err) {
          setError("Failed to fetch user data.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchUserData();
    }
  }, [activeSection]);

  // Handle Delete user
  const handleDelete = async (userId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (confirmDelete) {
        // Sending DELETE request to the backend
        const response = await axios.delete(
          `http://localhost:5000/api/admin/users/${userId}`
        );

        // Log the response to verify
        console.log(response);

        if (response.status === 200) {
          // Successfully deleted user
          setUserData(userData.filter((user) => user._id !== userId)); // Update state to reflect deletion
          toast.success("User deleted successfully", {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 5000,
          });
        } else {
          // If response status isn't 200, log an error
          console.error("Failed to delete user. Response:", response);
        }
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      toast.error("Failed to delete user", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  // Handle Edit user
  const handleEdit = (user) => {
    console.log("Editing user:", user); // Check if the user is correctly passed
    setCurrentUser(user); // Pass the full user object
    setIsModalOpen(true); // Open the modal
  };

  // Handle Save Edited User
  const handleSave = async (e) => {
    e.preventDefault(); // Prevent form submission

    console.log("Saving user data:", currentUser); // Debugging logs

    try {
      const updatedUser = {
        name: currentUser.name,
        email: currentUser.email,
      };

      console.log("Updated User Data: ", updatedUser);

      const response = await axios.put(
        `http://localhost:5000/api/admin/users/${currentUser._id}`,
        updatedUser
      );

      if (response.status === 200) {
        // Update the local userData state
        setUserData(
          (prevUserData) =>
            prevUserData.map((user) =>
              user._id === currentUser._id ? { ...user, ...updatedUser } : user
            ),
          setIsModalOpen(false)
        );

        toast.success("User updated successfully", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 5000,
        });

        // Close the modal
        setIsModalOpen(false); // Ensure this line is executed
      } else {
        toast.error("Failed to update user", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (err) {
      console.error("Error saving user data:", err);
      toast.error("Failed to update user", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  // Feedback data
  useEffect(() => {
    if (activeSection === "Feedback") {
      const fetchFeedbackData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(
            "http://localhost:5000/api/admin/feedback" // Assuming you have a route like this for feedback
          );
          setFeedbackData(response.data); // Update the state with the fetched data
        } catch (err) {
          setError("Failed to fetch feedback data.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchFeedbackData();
    }
  }, [activeSection]);

  // Delete feedback
  const handleDeleteFeedback = async (feedbackId) => {
    try {
      setLoading(true);
      // Making DELETE request to the server (replace with your API URL)
      const response = await fetch(
        `http://localhost:5000/feedback/${feedbackId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete feedback.");
      }

      // If delete is successful, filter out the deleted feedback from state
      setFeedbackData(
        feedbackData.filter((feedback) => feedback._id !== feedbackId)
      );

      alert("Feedback deleted successfully!");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  // Edit feedback
  const handleEditFeedback = (feedback) => {
    setCurrentFeedback(feedback); // Set the feedback data to be edited
    setIsFeedbackModalOpen(true); // Open the modal
  };
  
  // Updated Feedback
  const handleSaveFeedback = async (e) => {
    e.preventDefault(); // Prevent form submission
  
    if (!currentFeedback || !currentFeedback._id) {
      console.error("Invalid feedback data.");
      toast.error("Invalid feedback data.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return;
    }
  
    const updatedFeedback = {
      name: currentFeedback.name,
      email: currentFeedback.email,
      message: currentFeedback.message,
    };
  
    try {
      const response = await axios.put(
        `http://localhost:5000/api/admin/feedback/${currentFeedback._id}`,
        updatedFeedback
      );
  
      if (response.status === 200) {
        setFeedbackData((prevFeedbackData) =>
          prevFeedbackData.map((feedback) =>
            feedback._id === currentFeedback._id
              ? { ...feedback, ...updatedFeedback }
              : feedback
          ),
          setIsFeedbackModalOpen(false)
        );
  
        toast.success("Feedback updated successfully", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 5000,
        });
  
        setIsFeedbackModalOpen(false); // Close the modal
      } else {
        toast.error("Failed to update feedback", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (err) {
      console.error("Error saving feedback data:", err);
      toast.error("Failed to update feedback", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };
  
  

  // Function to render dynamic content
  const renderSectionContent = () => {
    switch (activeSection) {
      case "Overview":
        return (
          <div className="overview-section">
            <h2>Overview</h2>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : (
              <div className="stats-container">
                <div className="stat-card">
                  <h3>Users</h3>
                  <p>{overviewData.users} Registered Users</p>
                </div>
                <div className="stat-card">
                  <h3>Feedback</h3>
                  <p>{overviewData.feedback} Feedback Messages</p>
                </div>
              </div>
            )}
          </div>
        );
      case "Users":
        return (
          <div className="users-section">
            <h2>Users</h2>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : (
              <table className="user-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user) => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(user)} // Pass the full user object here
                        >
                          Edit
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );
      case "Feedback":
        return (
          <div className="feedback-section">
            <h2>Feedback</h2>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : (
              <table className="feedback-table">
                <thead>
                  <tr>
                    {/* <th>ID</th> */}
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Submitted At</th>
                    <th>Actions</th> {/* Added Actions column */}
                  </tr>
                </thead>
                <tbody>
                  {feedbackData.map((feedback) => (
                    <tr key={feedback._id}>
                      {/* <td>{feedback._id}</td> */}
                      <td>{feedback.name}</td>
                      <td>{feedback.email}</td>
                      <td>{feedback.message}</td>
                      <td>{new Date(feedback.createdAt).toLocaleString()}</td>
                      <td>
                        {/* Edit and Delete buttons */}
                        <button
                          className="edit-btn"
                          onClick={() => handleEditFeedback(feedback)}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteFeedback(feedback._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
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
              className={`menu-item ${
                activeSection === section ? "active" : ""
              }`}
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
        {renderSectionContent()}{" "}
        {/* Dynamically renders the selected section */}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit User</h2>
            <form onSubmit={handleSave}>
              {" "}
              {/* Form submission handling */}
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={currentUser.name}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={currentUser.email}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, email: e.target.value })
                  }
                />
              </div>
              <button type="submit">Save</button>
              {/* This triggers form submit */}
              <button
                style={{ backgroundColor: "#ff7043" }}
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {isFeedbackModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Feedback</h2>
            <form onSubmit={handleSaveFeedback}>
              {/* Form fields */}
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={currentFeedback?.name || ""}
                  onChange={(e) =>
                    setCurrentFeedback({
                      ...currentFeedback,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={currentFeedback?.email || ""}
                  onChange={(e) =>
                    setCurrentFeedback({
                      ...currentFeedback,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={currentFeedback?.message || ""}
                  onChange={(e) =>
                    setCurrentFeedback({
                      ...currentFeedback,
                      message: e.target.value,
                    })
                  }
                />
              </div>
              <button type="submit">Save</button>{" "}
              {/* This triggers form submit */}
              <button
                style={{ backgroundColor: "#ff7043" }}
                type="button"
                onClick={() => setIsFeedbackModalOpen(false)} // Close button
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
