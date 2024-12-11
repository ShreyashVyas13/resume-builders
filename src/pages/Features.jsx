import "./Features.css";

const Features = () => {
  const featuresData = [
    {
      title: "Customizable Templates",
      description: "Choose from a wide range of professionally designed templates.",
      details:
        "Our templates are designed to highlight your skills and experience in the best possible way. Customize fonts, colors, and layouts to suit your preferences.",
      icon: "🎨",
    },
    {
      title: "One-Click Downloads",
      description: "Download your resume in multiple formats like PDF or Word instantly.",
      details:
        "With a single click, export your resume in high-quality PDF or Word format, ensuring compatibility with recruiters' systems.",
      icon: "⬇️",
    },
    {
      title: "Real-Time Previews",
      description: "See live updates as you edit your resume.",
      details:
        "Our live preview feature lets you see how your resume looks while you're editing, so you can make adjustments on the go.",
      icon: "👀",
    },
    {
      title: "Expert Tips",
      description: "Get suggestions and examples to craft the perfect resume.",
      details:
        "Access a library of expert advice, pre-written phrases, and resume samples to guide you through creating a standout resume.",
      icon: "💡",
    },
    {
      title: "Mobile-Friendly",
      description: "Edit and preview your resume on the go.",
      details:
        "Our platform is fully optimized for mobile devices, letting you create and edit resumes from anywhere.",
      icon: "📱",
    },
    {
      title: "Secure Storage",
      description: "Your data is securely saved and accessible anytime.",
      details:
        "We use advanced encryption to keep your personal information safe and ensure you can access your resumes whenever you need them.",
      icon: "🔒",
    },
  ];

  return (
    <>
    <div className="content-wrapper">
    <div className="features-page">
      <section className="features-header">
        <h1 className="features-title">Why Choose Us?</h1>
        <p className="features-subtitle">
          Discover the powerful tools and features that make resume building effortless.
        </p>
      </section>

      <section className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <div className="feature-details">
              <p>{feature.details}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
    </div>
    </>
  );
};

export default Features;
