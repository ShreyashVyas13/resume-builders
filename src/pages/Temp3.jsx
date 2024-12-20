import { useState } from "react";
import "./Temp3.css";
import  html2pdf  from "html2pdf.js";

const Temp3 = () => {
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    aboutMe: "",
    profileImage: "images/prof.png", // New property for profile image
    skills: ["", "", "", ""],
    contact: {
      phone: "",
      email: "",
      website: "",
      address: "",
    },
    education: {
      institution: "",
      university: "",
      duration: "",
      department: "",
    },
    workExperience: [
      {
        position: "",
        company: "",
        location: "",
        duration: "",
        description: "",
      },
      {
        position: "",
        company: "",
        location: "",
        duration: "",
        description: "",
      },
    ],
  });

  const handleChange = (section, key, value, index) => {
    if (index !== undefined) {
      const updatedWorkExperience = [...profile.workExperience];
      updatedWorkExperience[index][key] = value;
      setProfile({ ...profile, workExperience: updatedWorkExperience });
    } else if (section === "skills") {
      const updatedSkills = [...profile.skills];
      updatedSkills[key] = value;
      setProfile({ ...profile, skills: updatedSkills });
    } else if (section === "contact") {
      setProfile({
        ...profile,
        contact: { ...profile.contact, [key]: value },
      });
    } else if (section === "education") {
      setProfile({
        ...profile,
        education: { ...profile.education, [key]: value },
      });
    } else {
      setProfile({ ...profile, [key]: value });
    }
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, profileImage: imageUrl });
    }
  };
    const downloadResume = () => {
      const resumeElement = document.getElementById("resume-container");
      const options = {
        margin:       1,
        filename:     "resume.pdf",
        image:        { type: "jpeg", quality: 0.98 },
        html2canvas:  { scale: 4 },
        jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" },
      };
  
      html2pdf().from(resumeElement).set(options).save();
    };
  
  return (
    <>
    <div id="resume-container" className="resumee" >
      {/* Left Section */}
      <div className="left-section">
      <div className="profile-picture">
  {profile.profileImage ? (
    <img
      src={profile.profileImage}
      alt="Profile"
      className="profile-img"
      onClick={() => document.getElementById("imageUpload").click()}
    />
  ) : (
    <div
      className="placeholder"
      onClick={() => document.getElementById("imageUpload").click()}
    >
      Click to add profile image
    </div>
  )}
  <input
    id="imageUpload"
    type="file"
    accept="image/*"
    style={{ display: "none" }}
    onChange={handleImageUpload}
  />
</div>
<br />
        <div className="section">
          <h2 className="section-header">About Me</h2>
          <textarea
            className="section-content editable white-font"
            placeholder="Enter about me details..."
            value={profile.aboutMe}
            onChange={(e) => handleChange("aboutMe", "aboutMe", e.target.value)}
          />
        </div>
        <div className="section">
          <h2 className="section-header">Skills</h2>
          <ul className="skills-list">
            {profile.skills.map((skill, index) => (
              <li key={index}>
                <input
                  className="editable white-font"
                  type="text"
                  placeholder={`Skill ${index + 1}`}
                  value={skill}
                  onChange={(e) =>
                    handleChange("skills", index, e.target.value)
                  }
                  style={{color:'#fff'}}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h2 className="section-header">Contact Me</h2>
          <ul className="contact-info">
            <li>
              📞{" "}
              <input
                className="editable white-font"
                type="text"
                placeholder="Enter phone number"
                value={profile.contact.phone}
                onChange={(e) =>
                  handleChange("contact", "phone", e.target.value)
                }
                style={{color:'#fff'}}
              />
            </li>
            <li>
              📧{" "}
              <input
                className="editable white-font"
                type="text"
                placeholder="Enter email"
                value={profile.contact.email}
                onChange={(e) =>
                  handleChange("contact", "email", e.target.value)
                }
                style={{color:'#fff'}}
              />
            </li>
            <li>
              🌐{" "}
              <input
                className="editable white-font"
                type="text"
                placeholder="Enter website"
                value={profile.contact.website}
                onChange={(e) =>
                  handleChange("contact", "website", e.target.value)
                }
                style={{color:'#fff'}}
              />
            </li>
            <li>
              🏠{" "}
              <input
                className="editable white-font"
                type="text"
                placeholder="Enter address"
                value={profile.contact.address}
                onChange={(e) =>
                  handleChange("contact", "address", e.target.value)
                }
                style={{color:'#fff'}}
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="header">
          <input
            className="editable white-font"
            type="text"
            placeholder="Enter your name"
            value={profile.name}
            onChange={(e) => handleChange("", "name", e.target.value)}
            style={{color:'#fff', fontSize:'20px'}}
          />
          <input
            className="editable white-font"
            type="text"
            placeholder="Enter your role"
            value={profile.title}
            onChange={(e) => handleChange("", "title", e.target.value)}
            style={{color:'#fff', fontSize:'15px'}}
          />
        </div>
        <div className="section">
  <h2 className="section-header">Education</h2>
  <p className="education-details">
    <input
      className="editable black-font"
      type="text"
      placeholder="Enter institution name"
      value={profile.education.institution}
      onChange={(e) =>
        handleChange("education", "institution", e.target.value)
      }
    />
    <br />
    <input
      className="editable black-font"
      type="text"
      placeholder="Enter university name"
      value={profile.education.university}
      onChange={(e) =>
        handleChange("education", "university", e.target.value)
      }
    />{" "}
    |{" "}
    <input
      className="editable black-font"
      type="text"
      placeholder="Enter duration"
      value={profile.education.duration}
      onChange={(e) =>
        handleChange("education", "duration", e.target.value)
      }
    />
    <br />
    <input
      className="editable black-font"
      type="text"
      placeholder="Enter department"
      value={profile.education.department}
      onChange={(e) =>
        handleChange("education", "department", e.target.value)
      }
    />
  </p>
</div>
<div className="section">
  <h2 className="section-header">Work Experience</h2>
  {profile.workExperience.map((work, index) => (
    <div className="work-entry" key={index}>
      <input
        className="editable black-font"
        type="text"
        placeholder="Enter job position"
        value={work.position}
        onChange={(e) =>
          handleChange("workExperience", "position", e.target.value, index)
        }
      />
      <p>
        <input
          className="editable black-font"
          type="text"
          placeholder="Enter company name"
          value={work.company}
          onChange={(e) =>
            handleChange("workExperience", "company", e.target.value, index)
          }
        />{" "}
        |{" "}
        <input
          className="editable black-font"
          type="text"
          placeholder="Enter location"
          value={work.location}
          onChange={(e) =>
            handleChange("workExperience", "location", e.target.value, index)
          }
        />{" "}
        <br />
        <input
          className="editable black-font"
          type="text"
          placeholder="Enter duration"
          value={work.duration}
          onChange={(e) =>
            handleChange("workExperience", "duration", e.target.value, index)
          }
        />
      </p>
      <textarea
        className="editable black-font"
        placeholder="Enter job description"
        value={work.description}
        onChange={(e) =>
          handleChange("workExperience", "description", e.target.value, index)
        }
      />
    </div>
  ))}
</div>
      </div>
    </div>
    <div className="download-btn">
    <button onClick={downloadResume}>Download Resume</button>
  </div>
    </>
  );
};

export default Temp3;
