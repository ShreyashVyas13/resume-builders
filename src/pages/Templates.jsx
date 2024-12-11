import { useNavigate } from 'react-router-dom';
import './Templates.css';

const templatesData = [
  { 
    id: 1, 
    name: 'Professional', 
    img: '/images/template1.jpg',
    description: "A clean, professional template for business-oriented resumes.",
    route: '/temp1', // Set the route for each template
  },
  { 
    id: 2, 
    name: 'Creative', 
    img: '/images/template2.png',
    description: "A modern and artistic template for creative fields.",
    route: '/temp2', // Set the route for each template
  },
  { 
    id: 3, 
    name: 'Modern', 
    img: '/images/template3.png',
    description: "A sleek and minimal template for tech-savvy professionals.",
    route: '/temp3', // Set the route for each template
  },
  { 
    id: 4, 
    name: 'Minimalist', 
    img: '/images/template4.png',
    description: "A simple yet elegant resume design for a clutter-free look.",
    route: '/temp4', // Set the route for each template
  },
  { 
    id: 5, 
    name: 'Corporate', 
    img: '/images/template5.png',
    description: "A classic corporate resume design for business professionals.",
    route: '/temp5', // Set the route for each template
  }
];

const Templates = () => {
  const navigate = useNavigate(); // React Router's navigation hook

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
