import "./Home.css";

const Home = () => {
  return (
    <>
    <div className="content-wrapper">
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Your <span className="highlight">Professional Resume</span> in Minutes
          </h1>
          <p className="hero-subtitle">
            Create a standout resume with customizable templates and user-friendly tools.
          </p>
          <div className="hero-buttons">
            <button className="btn primary-btn">Get Started</button>
            <button className="btn secondary-btn">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/main2.svg"
            alt="Resume Builder Illustration"
            className="responsive-image"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">&#128203;</div>
            <h3>Customizable Templates</h3>
            <p>Create resumes that match your style with ease.</p>
          </div>
          <div className="feature-card">
            <div className="icon">&#128214;</div>
            <h3>Expert Guidance</h3>
            <p>Get tips and examples to build the perfect resume.</p>
          </div>
          <div className="feature-card">
            <div className="icon">&#128295;</div>
            <h3>Easy Editing</h3>
            <p>Edit your resumes anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Create Your Resume?</h2>
        <button className="btn primary-btn">Start Now</button>
      </section>
    </div>
    </div>
    </>
  );
};

export default Home;
