import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast and container
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      console.log(response.data.message);

      // Success toast message
      toast.success("Form submitted successfully!");
      
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting the form:", error);

      // Error toast message
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return (
    <>
      <div className="wrap">
        <div className="contact-page">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>We love to hear from you! Please fill out the form below.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        <div className="support-img">
          <img src="contact.svg" alt="" />
        </div>
      </div>
      <ToastContainer /> {/* Toast container to display messages */}
    </>
  );
};

export default Contact;
