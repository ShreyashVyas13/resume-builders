import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="about-overlay">
          <h1>About Us</h1>
          <p>
            Discover who we are and what drives us to build the perfect tools for your success.
          </p>
        </div>
      </header>

      <section className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img src="/images/about-team.svg" alt="Our Team" />
          </div>
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              We are a team of passionate professionals dedicated to simplifying resume building for everyone. 
              Our mission is to provide tools that empower individuals to achieve their career goals with ease and confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Continuously improving and adopting the latest technologies to meet your needs.
            </p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>
              Delivering the best user experience with professional-grade templates and tools.
            </p>
          </div>
          <div className="value-card">
            <h3>Empowerment</h3>
            <p>
              Enabling individuals to create resumes that help them stand out.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team-member1.jpg" alt="Team Member" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member2">
            <img src="/images/team-member2.jpg" alt="Team Member" />
            <h3>John Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member3.jpg" alt="Team Member" />
            <h3>Alice Brown</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <h2>Ready to Build Your Future?</h2>
        <button className="btn primary-btn">Get Started</button>
      </footer>
    </div>
  );
};

export default About;
