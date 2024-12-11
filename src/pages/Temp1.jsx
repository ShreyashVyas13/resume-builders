// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import "./Temp1.css";

// const Temp1 = () => {
//   return (
//     <div className="resume-container">
//       <div className="header">
//         <img
//           src="/images/profile-placeholder.png"
//           alt="Profile"
//           className="profile-image"
//         />
//         <div className="header-text">
//           <h1>Olivia Wilson</h1>
//           <h2>Data Analyst</h2>
//         </div>
//       </div>
//       <div className="content">
//         <div className="left-column">
//           <div className="section">
//             <h3>Contact</h3>
//             <p>
//               <FaPhoneAlt /> 123 456 7890
//             </p>
//             <p>
//               <FaEnvelope /> hello@reallygreatsite.com
//             </p>
//             <p>
//               <FaMapMarkerAlt /> Location, Country
//             </p>
//             <div className="social-icons">
//               <a href="https://www.linkedin.com/in/oliviawilson" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin />
//               </a>
//               <a href="https://github.com/oliviawilson" target="_blank" rel="noopener noreferrer">
//                 <FaGithub />
//               </a>
//             </div>
//           </div>
//           <div className="section">
//             <h3>About Me</h3>
//             <p>
//               Hard-working, creative and proactive. Specialised in Digital Data
//               and Analysis. Ambitious, eager to keep growing and evolving in my
//               profession. Constantly developing new skills and abilities.
//             </p>
//           </div>
//           <div className="section">
//             <h3>Competences</h3>
//             <ul>
//               <li>In-depth market research and strategic implementation.</li>
//               <li>Research into consumption patterns.</li>
//               <li>
//                 Innovation and creativity in advertising campaigns.
//               </li>
//               <li>Creative writing.</li>
//             </ul>
//           </div>
//           <div className="section">
//             <h3>Languages</h3>
//             <p>English - Native</p>
//             <p>French - Intermediate</p>
//           </div>
//           <div className="section">
//             <h3>References</h3>
//             <p>Available upon request.</p>
//           </div>
//         </div>
//         <div className="right-column">
//           <div className="section">
//             <h3>Education</h3>
//             <p>
//               <strong>London University</strong> <br />
//               Informatic Engineering <br /> 2013/2016
//             </p>
//             <p>
//               <strong>London Master University</strong> <br />
//               Data Analysis <br /> 2016/2018
//             </p>
//             <p>
//               <strong>School of Data</strong> <br />
//               Research and strategy <br /> 2018/2019
//             </p>
//           </div>
//           <div className="section">
//             <h3>Work Experience</h3>
//             <p>
//               <strong>Fauget | 2018-2019</strong> <br />
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <p>
//               <strong>Fauget | 2019-2020</strong> <br />
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <p>
//               <strong>Fauget | 2020-2022</strong> <br />
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Temp1;

// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { useState } from "react"; // Import useState for state management
// import "./Temp1.css";

// const Temp1 = () => {
//   // Define state for each editable section
//   const [name, setName] = useState("Olivia Wilson");
//   const [title, setTitle] = useState("Data Analyst");
//   const [phone, setPhone] = useState("123 456 7890");
//   const [email, setEmail] = useState("hello@reallygreatsite.com");
//   const [location, setLocation] = useState("Location, Country");
//   const [profileImage, setProfileImage] = useState("/images/prof.png"); // Default image

//   const [aboutMe, setAboutMe] = useState(
//     "Hard-working, creative and proactive. Specialised in Digital Data and Analysis. Ambitious, eager to keep growing and evolving in my profession. Constantly developing new skills and abilities."
//   );
//   const [competences, setCompetences] = useState([
//     "In-depth market research and strategic implementation.",
//     "Research into consumption patterns.",
//     "Innovation and creativity in advertising campaigns.",
//     "Creative writing.",
//   ]);
//   const [languages, setLanguages] = useState({
//     english: "Native",
//     french: "Intermediate",
//   });
//   const [education, setEducation] = useState([
//     { school: "London University", degree: "Informatic Engineering", years: "2013/2016" },
//     { school: "London Master University", degree: "Data Analysis", years: "2016/2018" },
//     { school: "School of Data", degree: "Research and strategy", years: "2018/2019" },
//   ]);
//   const [workExperience, setWorkExperience] = useState([
//     { company: "Fauget", years: "2018-2019", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { company: "Fauget", years: "2019-2020", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { company: "Fauget", years: "2020-2022", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//   ]);
//   const [references, setReferences] = useState("Available upon request.");
// //   const [workExperienceTitle, setWorkExperienceTitle] = useState("Work Experience"); // New state for Work Experience title

// const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result); // Update profile image with selected file
//       };
//       reader.readAsDataURL(file);
//     }
//   }
//   return (
//     <div className="resume-container">
//       <div className="header">
//       <div className="profile-image-container">
//         <img
//           src={profileImage}
//           alt="Profile"
//           className="profile-image"
//           onClick={() => document.getElementById("file-input").click()} // Trigger file input when image is clicked
//         />
//         <input
//           type="file"
//           id="file-input"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="file-input"
//         />
//       </div>
//         <div className="header-text">
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)} // Update state when edited
//             className="editable-header"
//           />
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)} // Update state when edited
//             className="editable-header"
//           />
//         </div>
//       </div>
//       <div className="content">
//         <div className="left-column">
//           <div className="section">
//             <h3>Contact</h3>
//             <p>
//               <FaPhoneAlt /> <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
//             </p>
//             <p>
//               <FaEnvelope /> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </p>
//             <p>
//               <FaMapMarkerAlt /> <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
//             </p>
//           </div>
//           <div className="section">
//             <h3>About Me</h3>
//             <textarea
//               value={aboutMe}
//               onChange={(e) => setAboutMe(e.target.value)}
//               className="editable-textarea"
//             />
//           </div>
//           <div className="section">
//             <h3>Competences</h3>
//             <ul>
//               {competences.map((competence, index) => (
//                 <li key={index}>
//                   <input
//                     type="text"
//                     value={competence}
//                     onChange={(e) => {
//                       const updatedCompetences = [...competences];
//                       updatedCompetences[index] = e.target.value;
//                       setCompetences(updatedCompetences);
//                     }}
//                   />
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="section">
//             <h3>Languages</h3>
//             <p>
//               <input
//                 type="text"
//                 value={languages.english}
//                 onChange={(e) => setLanguages({ ...languages, english: e.target.value })}
//               />
//             </p>
//             <p>
//               <input
//                 type="text"
//                 value={languages.french}
//                 onChange={(e) => setLanguages({ ...languages, french: e.target.value })}
//               />
//             </p>
//           </div>
//           <div className="section">
//             <h3>References</h3>
//             <textarea
//               value={references}
//               onChange={(e) => setReferences(e.target.value)}
//               className="editable-textarea"
//             />
//           </div>
//         </div>
//         <div className="right-column">
//           <div className="section">
//             <h3>Education</h3>
//             {education.map((edu, index) => (
//               <div key={index}>
//                 <div>
//                   <input
//                     type="text"
//                     value={edu.school}
//                     onChange={(e) => {
//                       const updatedEducation = [...education];
//                       updatedEducation[index].school = e.target.value;
//                       setEducation(updatedEducation);
//                     }}
//                     className="editable-input"
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="text"
//                     value={edu.degree}
//                     onChange={(e) => {
//                       const updatedEducation = [...education];
//                       updatedEducation[index].degree = e.target.value;
//                       setEducation(updatedEducation);
//                     }}
//                     className="editable-input"
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="text"
//                     value={edu.years}
//                     onChange={(e) => {
//                       const updatedEducation = [...education];
//                       updatedEducation[index].years = e.target.value;
//                       setEducation(updatedEducation);
//                     }}
//                     className="editable-input"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="section">
//       <h3>
//         Work Experience
//       </h3>
//       {workExperience.map((job, index) => (
//         <div key={index} className="work-entry">
//           <input
//             type="text"
//             value={`${job.company} | ${job.years}`}
//             onChange={(e) => {
//               const updatedJobs = [...workExperience];
//               updatedJobs[index] = {
//                 ...updatedJobs[index],
//                 company: e.target.value.split(" | ")[0], // Extract company name
//                 years: e.target.value.split(" | ")[1], // Extract years
//               };
//               setWorkExperience(updatedJobs);
//             }}
//             className="editable-input"
//           />
//           <textarea
//             value={job.description}
//             onChange={(e) => {
//               const updatedJobs = [...workExperience];
//               updatedJobs[index].description = e.target.value;
//               setWorkExperience(updatedJobs);
//             }}
//             className="editable-textarea"
//           />
//         </div>
//       ))}
//     </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Temp1;


// Exp1

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react"; // Import useState for state management
import html2pdf from "html2pdf.js"; // Import html2pdf.js
import "./Temp1.css";

const Temp1 = () => {
  // Define state for each editable section
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [profileImage, setProfileImage] = useState("/images/prof.png"); // Default image
  const [aboutMe, setAboutMe] = useState("");
  const [competences, setCompetences] = useState(["", "", "", ""]);
  const [languages, setLanguages] = useState({
    english: "",
    french: "",
  });
  const [education, setEducation] = useState([
    { school: "", degree: "", years: "" },
    { school: "", degree: "", years: "" },
    { school: "", degree: "", years: "" },
  ]);
  const [workExperience, setWorkExperience] = useState([
    { company: "", years: "", description: "" },
    { company: "", years: "", description: "" },
    { company: "", years: "", description: "" },
  ]);
  const [references, setReferences] = useState("");

  // Handle profile image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Update profile image with selected file
      };
      reader.readAsDataURL(file);
    }
  };

  // Save template data to the backend and download the resume as a PDF
  const downloadResume = async () => {
    const templateData = {
      name,
      title,
      phone,
      email,
      location,
      profileImage,
      aboutMe,
      competences,
      languages,
      education,
      workExperience,
      references,
    };

    try {
      const response = await fetch("http://localhost:5000/api/templates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(templateData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Template saved successfully:", data);
      } else {
        console.error("Error saving template:", data);
      }
    } catch (error) {
      console.error("Error sending data to server:", error);
    }

    const resumeContent = document.getElementById("resume-container");

    const options = {
      margin: 10,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(resumeContent).set(options).save();
  };

  return (
    <>
      <div className="resume-container" id="resume-container">
        <div className="header">
          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
              onClick={() => document.getElementById("file-input").click()} // Trigger file input when image is clicked
            />
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
          </div>
          <div className="header-text">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Olivia Wilson"
              className="editable-header"
            />
            <br />
            <br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Data Analyst"
              className="editable-header"
            />
          </div>
        </div>
        <div className="content">
          <div className="left-column">
            {/* Contact Section */}
            <div className="section">
              <h3>Contact</h3>
              <p>
                <FaPhoneAlt />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="123 456 7890"
                />
              </p>
              <p>
                <FaEnvelope />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@reallygreatsite.com"
                />
              </p>
              <p>
                <FaMapMarkerAlt />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location, Country"
                />
              </p>
            </div>

            {/* About Me Section */}
            <div className="section">
              <h3>About Me</h3>
              <textarea
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
                placeholder="Hard-working, creative and proactive..."
                className="editable-textarea"
              />
            </div>

            {/* Competences Section */}
            <div className="section">
              <h3>Competences</h3>
              <ul>
                {competences.map((competence, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      value={competence}
                      onChange={(e) => {
                        const updatedCompetences = [...competences];
                        updatedCompetences[index] = e.target.value;
                        setCompetences(updatedCompetences);
                      }}
                      placeholder="In-depth market research..."
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages Section */}
            <div className="section">
              <h3>Languages</h3>
              <p>
                <input
                  type="text"
                  value={languages.english}
                  onChange={(e) =>
                    setLanguages({ ...languages, english: e.target.value })
                  }
                  placeholder="Native"
                />
              </p>
              <p>
                <input
                  type="text"
                  value={languages.french}
                  onChange={(e) =>
                    setLanguages({ ...languages, french: e.target.value })
                  }
                  placeholder="Intermediate"
                />
              </p>
            </div>

            {/* References Section */}
            <div className="section">
              <h3>References</h3>
              <textarea
                value={references}
                onChange={(e) => setReferences(e.target.value)}
                placeholder="Available upon request"
                className="editable-textarea"
              />
            </div>
          </div>

          <div className="right-column">
            {/* Education Section */}
            <div className="section">
              <h3>Education</h3>
              {education.map((edu, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) => {
                      const updatedEducation = [...education];
                      updatedEducation[index].school = e.target.value;
                      setEducation(updatedEducation);
                    }}
                    placeholder="London University"
                    className="editable-input"
                  />
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => {
                      const updatedEducation = [...education];
                      updatedEducation[index].degree = e.target.value;
                      setEducation(updatedEducation);
                    }}
                    placeholder="Informatic Engineering"
                    className="editable-input"
                  />
                  <input
                    type="text"
                    value={edu.years}
                    onChange={(e) => {
                      const updatedEducation = [...education];
                      updatedEducation[index].years = e.target.value;
                      setEducation(updatedEducation);
                    }}
                    placeholder="2013/2016"
                    className="editable-input"
                  />
                </div>
              ))}
            </div>

            {/* Work Experience Section */}
            <div className="section">
              <h3>Work Experience</h3>
              {workExperience.map((job, index) => (
                <div key={index} className="work-entry">
                  <input
                    type="text"
                    value={`${job.company} | ${job.years}`}
                    onChange={(e) => {
                      const updatedJobs = [...workExperience];
                      updatedJobs[index] = {
                        ...updatedJobs[index],
                        company: e.target.value.split(" | ")[0],
                        years: e.target.value.split(" | ")[1],
                      };
                      setWorkExperience(updatedJobs);
                    }}
                    placeholder="Fauget | 2018-2019"
                    className="editable-input"
                  />
                  <textarea
                    value={job.description}
                    onChange={(e) => {
                      const updatedJobs = [...workExperience];
                      updatedJobs[index].description = e.target.value;
                      setWorkExperience(updatedJobs);
                    }}
                    placeholder="Lorem ipsum dolor sit amet..."
                    className="editable-textarea"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="download-btn">
        <button onClick={downloadResume}>Download Resume</button>
      </div>
    </>
  );
};

export default Temp1;
