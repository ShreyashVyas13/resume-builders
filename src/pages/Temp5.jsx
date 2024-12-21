import { useState } from 'react';
import './Temp5.css';
import  html2pdf  from 'html2pdf.js';

const Temp5 = () => {
  const [header, setHeader] = useState({
    name: '',
    subtitle: '',
    contact: '',
  });

  const [about, setAbout] = useState('');

  const [experiences, setExperiences] = useState([
    { year: '', title: '', details: '' },
  ]);

  const [skills, setSkills] = useState([
    { name: '', stars: 5 },
    { name: '', stars: 4 },
    { name: '', stars: 4 },
    { name: '', stars: 5 },
  ]);

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  const handleSkillChange = (index, stars) => {
    const updatedSkills = [...skills];
    updatedSkills[index].stars = stars;
    setSkills(updatedSkills);
  };

  const [education, setEducation] = useState([
    { year: '', school: '', degree: '' },
    { year: '', school: '', degree: '' },
  ]);

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };
   const downloadResume = () => {
              const resumeElement = document.getElementById("resume-containerr");
              const options = {
                margin:       1,
                filename:     "resume.pdf",
                image:        { type: "jpeg", quality: 0.98 },
                html2canvas:  { scale: 2, width: 800  },
                jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" },
              };
          
              html2pdf().from(resumeElement).set(options).save();
            };

  return (
    <>
    <div id='resume-containerr' className="resume-coontainer">
      {/* Header */}
      <header className="resume-heeader">
        <input
          className="resume-titlee"
          value={header.name}
          placeholder="Full Name"
          onChange={(e) => setHeader({ ...header, name: e.target.value })}
          style={{textAlign:'center', color:'#2b6cb0', fontWeight:'600', fontSize:'20px'}}
        />
        <input
          className="resume-subtitle"
          value={header.subtitle}
          placeholder="Subtitle (e.g., Designer, Blogger)"
          onChange={(e) => setHeader({ ...header, subtitle: e.target.value })}
          style={{textAlign:'center', height:'20px',color:'#2b6cb0', fontWeight:'600',fontSize:'15px'}}
        />
        <input
          className="resume-contact"
          value={header.contact}
          placeholder="Contact Info (Phone, Email)"
          onChange={(e) => setHeader({ ...header, contact: e.target.value })}
          style={{textAlign:'center', height:'20px', color:'#2b6cb0', fontWeight:'600', fontSize:'15px'}}
        />
      </header>

      {/* About Section */}
      <section className="resume-about">
        <h2 className="resume-section-title">About</h2>
        <textarea
          className="resume-text"
          value={about}
          placeholder="Write about yourself..."
          onChange={(e) => setAbout(e.target.value)}
        />
      </section>

      {/* Job Experience */}
      <section className="resume-experience">
        <h2 className="resume-section-title">Job Experience</h2>
        <div className="resume-line">
          {experiences.map((exp, index) => (
            <div key={index} className="resume-experience-item">
              <input
                className="resume-experience-year"
                value={exp.year}
                placeholder="Year (e.g., 2013-Current)"
                onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
              />
              <input
                className="resume-experience-title"
                value={exp.title}
                placeholder="Job Title"
                onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
              />
              <textarea
                className="resume-experience-details"
                value={exp.details}
                placeholder="Job Description"
                onChange={(e) => handleExperienceChange(index, 'details', e.target.value)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="resume-education">
        <h2 className="resume-section-title">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="resume-education-item">
            <input
              className="resume-education-year"
              value={edu.year}
              placeholder="Year (e.g., 2011-2013)"
              onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
            />
            <input
              className="resume-education-school"
              value={edu.school}
              placeholder="School Name"
              onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
            />
            <input
              className="resume-education-degree"
              value={edu.degree}
              placeholder="Degree"
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            />

          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="resume-skills">
        <h2 className="resume-section-title">Skills</h2>
        <ul className="resume-skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="resume-skill-item">
              <input
                className="resume-skill-name"
                value={skill.name}
                placeholder="Skill Name"
                onChange={(e) =>
                  setSkills(
                    skills.map((s, i) => (i === index ? { ...s, name: e.target.value } : s))
                  )
                }
              />
              <div className="resume-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star-icon ${skill.stars >= star ? 'filled' : ''}`}
                    onClick={() => handleSkillChange(index, star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
    <div className="download-btn">
    <button onClick={downloadResume}>Download Resume</button>
  </div>
    </>
  );
};

export default Temp5;
