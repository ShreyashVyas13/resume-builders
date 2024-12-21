import { useNavigate } from "react-router-dom";
import "./Templates.css";

const templatesData = [
  { 
    id: 1, 
    name: "Professional", 
    img: "/images/template1.png",
    description: "A clean, professional template for business-oriented resumes.",
    route: "/temp1", 
  },
  { 
    id: 2, 
    name: "Creative", 
    img: "/images/template2.jpg",
    description: "A modern and artistic template for creative fields.",
    route: "/temp2", 
  },
  { 
    id: 3, 
    name: "Modern", 
    img: "/images/template3.jpg",
    description: "A sleek and minimal template for tech-savvy professionals.",
    route: "/temp3", 
  },
  { 
    id: 4, 
    name: "Minimalist", 
    img: "/images/template4.jpg",
    description: "A simple yet elegant resume design for a clutter-free look.",
    route: "/temp4", 
  },
  { 
    id: 5, 
    name: "Corporate", 
    img: "/images/template5.jpg",
    description: "A classic corporate resume design for business professionals.",
    route: "/temp5", 
  },
];

const Templates = () => {
  const navigate = useNavigate();

  const handlePreview = (route) => {
    navigate(route); // Redirect to the corresponding template page
  };

  return (
    <div className="templates-container">
      <h1 className="templates-title">Choose Your Perfect Template</h1>
      <div className="templates-grid">
        {templatesData.map((template) => (
          <div key={template.id} className="template-card">
            <img src={template.img} alt={template.name} className="template-image" />
            <div className="template-overlay">
              <h3 className="template-name">{template.name}</h3>
              <p className="template-description">{template.description}</p>
              <button 
                className="btn preview-btn" 
                onClick={() => handlePreview(template.route)}>
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
