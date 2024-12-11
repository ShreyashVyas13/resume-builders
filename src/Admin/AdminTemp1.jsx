import { useState, useEffect } from 'react';
import axios from 'axios';
import EditTemplate from './EditTemplate';

function AdminTemp1() {
  const [templates, setTemplates] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState(null);

  useEffect(() => {
    // Fetch all templates from the backend
    axios.get('http://localhost:5000/api/templates')
      .then(response => setTemplates(response.data))
      .catch(error => console.log('Error fetching templates', error));
  }, []);

  // Function to delete a template
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/templates/${id}`)
      .then(() => {
        // Remove deleted template from the state
        setTemplates(templates.filter(template => template._id !== id));
      })
      .catch(error => console.log('Error deleting template', error));
  };

  // Function to update a template
  const handleUpdate = () => {
    axios.put(`http://localhost:5000/api/templates/${currentTemplate._id}`, currentTemplate)
      .then(response => {
        // Update the template in the state
        setTemplates(templates.map(template => template._id === currentTemplate._id ? response.data : template));
        setIsEditing(false);
        setCurrentTemplate(null);
      })
      .catch(error => console.log('Error updating template', error));
  };

  return (
    <div>
      <h1 style={{color: 'black'}}>Admin Panel</h1>
      {isEditing ? (
        <div>
          <h2>Edit Template</h2>
          <input
            type="text"
            value={currentTemplate.name}
            onChange={(e) => setCurrentTemplate({ ...currentTemplate, name: e.target.value })}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2 style={{color: 'black'}}>Template List</h2>
          <ul>
  {templates.length > 0 ? (
    templates.map(template => (
      <li key={template._id}>
        <span style={{color:'black'}}>{template.name || "No Name Available"}</span>
        <button onClick={() => { <EditTemplate/> }}>Edit</button>
        <button onClick={() => handleDelete(template._id)}>Delete</button>
      </li>
    ))
  ) : (
    <p>No templates available. Check your database or API response.</p>
  )}
</ul>

        </div>
      )}
    </div>
  );
}

export default AdminTemp1;
