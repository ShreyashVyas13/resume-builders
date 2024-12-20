import  html2pdf  from "html2pdf.js";
import "./Temp4.css";

const Temp4 = () => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            // Update the profile picture with the selected file
            document.querySelector('.profile-pic').src = reader.result;
          };
          reader.readAsDataURL(file);
        }
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
    <div id="resume-containerr" className="resumeee">
      {/* Left Section */}
      <div className="leftt-section">
        <div className="ribbon"></div>
        <div className="profile-image">
  <label htmlFor="profile-pic" className="profile-pic-label">
    <img 
      src="images/prof.png" 
      alt="Profile" 
      className="profile-pic"
    />
  </label>
  <input 
    type="file" 
    id="profile-pic" 
    style={{ display: "none" }} 
    onChange={handleFileChange}
  />
</div>

        <div className="education-section">
          <h3>Education</h3>
          <label>
            
            <input type="text" placeholder="Bachelor of Engineering" />
          </label>
          <label>
            
            <input type="text" placeholder="Borcelle Institute" />
          </label>
          <label>
            <input type="text" placeholder="Year" />
          </label>
          <label>
            <input type="text" placeholder="Master of Engineering" />
          </label>
          <label>
            <input type="text" placeholder="Borcelle Institute" />
          </label>
          <label>
            <input type="text" placeholder="Year" />
          </label>
        </div>
        <div className="skills-section">
          <h3>Skills</h3>
          <ul>
            <li>
              <input type="text" placeholder="Teamwork" />
            </li>
            <li>
              <input type="text" placeholder="Work Under Pressure" />
            </li>
            <li>
              <input type="text" placeholder="Analytical Skills" />
            </li>
            <li>
              <input type="text" placeholder="Detail Oriented" />
            </li>
            <li>
              <input type="text" placeholder="Time Management" />
            </li>
            <li>
              <input type="text" placeholder="Problem Solving" />
            </li>
          </ul>
        </div>
        <div className="languages-section">
          <h3>Languages</h3>
          <ul>
            <li>
              <input type="text" placeholder="English" />
            </li>
            <li>
              <input type="text" placeholder="German" />
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="header">
          <h1>
            <input type="text" placeholder="Your Name" style={{color:"#fff", fontSize:'20px', fontWeight:'bold'}} />
          </h1>
          <p className="role">
            <input type="text" placeholder="Your Role" style={{color:"#fff", fontSize:'15px', fontStyle:'italic'}} />
          </p>
          <div className="contact">
            <div className="contact-item">
              <span className="icon">📞</span>
              <input type="tel" placeholder="+123-456-7890" style={{color:'#fff'}} />
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <input type="text" placeholder="Your Address" style={{color:'#fff'}} />
            </div>
            <div className="contact-item">
              <span className="icon">✉️</span>
              <input type="email" placeholder="your.email@example.com" style={{color:'#fff'}} />
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3>About Me</h3>
          <textarea placeholder="Write something about yourself"></textarea>
        </div>
        <div className="work-experiences">
          <h3>Work Experiences</h3>
          <div className="work-item">
            <h4>
              <input type="text" placeholder="Job Title" />
            </h4>
            <p>
              <input type="text" placeholder="Company Name | Year" />
            </p>
            <textarea placeholder="Job description"></textarea>
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

export default Temp4;
