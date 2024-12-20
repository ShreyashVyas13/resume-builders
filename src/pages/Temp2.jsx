import { useState } from "react";
import "./Temp2.css";
import html2pdf from "html2pdf.js"; // Import html2pdf.js

const Temp2 = () => {
  const [data, setData] = useState({
    name: "JOHN DOE",
    title: "Business Analyst",
    contact: {
      phone: "(555) 555-1234",
      email: "johndoe@email.com",
      address: "106 N Platinum Ave Derring, NY 86830",
    },
    profileImage: "images/prof.png",
    workExperience: [
      {
        date: "2020 - Present",
        company: "Venngage Inc.",
        position: "Business Analyst",
        tasks: [
          "Conduct financial analysis and prepare reports for management",
          "Develop and implement new business strategies",
          "Work with cross-functional teams to improve organizational efficiency",
        ],
      },
      {
        date: "2019 - 2020",
        company: "Twist One Inc.",
        position: "Position",
        tasks: [
          "Assisted senior consultants with client projects",
          "Conducted market research and analyzed data",
          "Prepared presentations and reports for clients",
        ],
      },
    ],
    education: [
      {
        date: "2018 - 2020",
        degree: "Master of Business Administration",
        university: "University of ABC, Anytown, USA",
      },
      {
        date: "2014 - 2018",
        degree: "Bachelor of Science in Business Administration",
        university: "University of XYZ, Anytown, USA",
      },
    ],
    expertise: [
      "Proficient in Microsoft Office Suite and various financial software",
      "Strong analytical and problem-solving skills",
      "Excellent communication and interpersonal abilities",
      "Member of the National Society of Leadership and Success",
    ],
    references: [
      {
        name: "William Adams",
        position: "Manager at Twist One Inc.",
        phone: "416-289-3233",
        email: "william@twist.com",
      },
      {
        name: "Christian Ferman",
        position: "Manager at Venngage Inc.",
        phone: "416-289-3233",
        email: "christian@venngage.com",
      },
    ],
  });

  const handleChange = (section, index, field, value) => {
    if (Array.isArray(data[section])) {
      const updatedSection = [...data[section]];
      updatedSection[index][field] = value;
      setData({ ...data, [section]: updatedSection });
    } else {
      setData({ ...data, [section]: { ...data[section], [field]: value } });
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setData({ ...data, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
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
      <div id="resume-container" className="resume">
        <div className="resume-header">
          <div className="header-left">
            <input
              type="text"
              placeholder="Enter Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="editable-title"
            />
            <input
              type="text"
              placeholder="Enter Title"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              className="editable-subtitle"
            />
          </div>
          <div className="header-right">
            <input
              type="file"
              id="file-input"
              className="file-input"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label htmlFor="file-input">
              <img
                src={data.profileImage}
                alt="Profile"
                className="profile-image"
              />
            </label>
          </div>
        </div>

        <div className="resume-content">
          <div className="left-column">
            <section className="work-experience">
              <h2>Work Experience</h2>
              {data.workExperience.map((item, index) => (
                <div className="work-item" key={index}>
                  <input
                    type="text"
                    placeholder="Enter Date"
                    value={item.date}
                    onChange={(e) =>
                      handleChange("workExperience", index, "date", e.target.value)
                    }
                    className="editable-date"
                  />
                  <input
                    type="text"
                    placeholder="Enter Company Name"
                    value={item.company}
                    onChange={(e) =>
                      handleChange("workExperience", index, "company", e.target.value)
                    }
                    className="editable-company"
                  />
                  <input
                    type="text"
                    placeholder="Enter Position"
                    value={item.position}
                    onChange={(e) =>
                      handleChange("workExperience", index, "position", e.target.value)
                    }
                    className="editable-position"
                  />
                  <ul>
                    {item.tasks.map((task, i) => (
                      <li key={i}>
                        <input
                          type="text"
                          placeholder="Enter Task"
                          value={task}
                          onChange={(e) => {
                            const updatedTasks = [...item.tasks];
                            updatedTasks[i] = e.target.value;
                            handleChange(
                              "workExperience",
                              index,
                              "tasks",
                              updatedTasks
                            );
                          }}
                          className="editable-task"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="education">
              <h2>Education</h2>
              {data.education.map((item, index) => (
                <div className="education-item" key={index}>
                  <input
                    type="text"
                    placeholder="Enter Date"
                    value={item.date}
                    onChange={(e) =>
                      handleChange("education", index, "date", e.target.value)
                    }
                    className="editable-date"
                  />
                  <input
                    type="text"
                    placeholder="Enter Degree"
                    value={item.degree}
                    onChange={(e) =>
                      handleChange("education", index, "degree", e.target.value)
                    }
                    className="editable-degree"
                  />
                  <input
                    type="text"
                    placeholder="Enter University"
                    value={item.university}
                    onChange={(e) =>
                      handleChange("education", index, "university", e.target.value)
                    }
                    className="editable-university"
                  />
                </div>
              ))}
            </section>
          </div>

          <div className="right-column">
            <section className="expertise">
              <h2>Expertise</h2>
              <ul>
                {data.expertise.map((skill, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      placeholder="Enter Skill"
                      value={skill}
                      onChange={(e) => {
                        const updatedSkills = [...data.expertise];
                        updatedSkills[index] = e.target.value;
                        setData({ ...data, expertise: updatedSkills });
                      }}
                      className="editable-skill"
                    />
                  </li>
                ))}
              </ul>
            </section>

            <section className="reference">
              <h2>Reference</h2>
              {data.references.map((ref, index) => (
                <div className="reference-item" key={index}>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={ref.name}
                    onChange={(e) =>
                      handleChange("references", index, "name", e.target.value)
                    }
                    className="editable-name"
                  />
                  <input
                    type="text"
                    placeholder="Enter Position"
                    value={ref.position}
                    onChange={(e) =>
                      handleChange("references", index, "position", e.target.value)
                    }
                    className="editable-position"
                  />
                  <input
                    type="text"
                    placeholder="Enter Phone"
                    value={ref.phone}
                    onChange={(e) =>
                      handleChange("references", index, "phone", e.target.value)
                    }
                    className="editable-phone"
                  />
                  <input
                    type="text"
                    placeholder="Enter Email"
                    value={ref.email}
                    onChange={(e) =>
                      handleChange("references", index, "email", e.target.value)
                    }
                    className="editable-email"
                  />
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>

      <div className="download-btn">
        <button onClick={downloadResume}>Download Resume</button>
      </div>
    </>
  );
};

export default Temp2;
