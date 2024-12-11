// backend/routes/templateRoutes.js
import express from 'express';
import Template from '../models/Template.js';  // Your Template model
const router = express.Router();

// Get all templates
// backend/routes/templateRoutes.js
router.get('/', async (req, res) => {
    try {
      const templates = await Template.find();  // Fetch all templates from the database
      res.json(templates);  // Send back the data as JSON
    } catch (error) {
      res.status(500).json({ message: 'Error fetching templates', error });
    }
  });
  

// Update template by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedTemplate = await Template.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTemplate) {
      return res.status(404).json({ message: 'Template not found' });
    }
    res.json(updatedTemplate);
  } catch (error) {
    res.status(500).json({ message: 'Error updating template', error });
  }
});

// Delete template by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedTemplate = await Template.findByIdAndDelete(req.params.id);
    if (!deletedTemplate) {
      return res.status(404).json({ message: 'Template not found' });
    }
    res.json({ message: 'Template deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting template', error });
  }
});

export default router;
