import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditTemplate = () => {
  const { id } = useParams();
  const [template, setTemplate] = useState({ name: '', html: '', css: '' });

  useEffect(() => {
    // Fetch the template data
    fetch(`/api/templates/${id}`)
      .then((res) => res.json())
      .then((data) => setTemplate(data));
  }, [id]);

  const handleChange = (e) => {
    setTemplate({ ...template, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/templates/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(template),
    }).then(() => alert('Template updated successfully'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Template Name:</label>
      <input
        type="text"
        name="name"
        value={template.name}
        onChange={handleChange}
      />
      <label>HTML:</label>
      <textarea
        name="html"
        value={template.html}
        onChange={handleChange}
      ></textarea>
      <label>CSS:</label>
      <textarea
        name="css"
        value={template.css}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditTemplate;
