// import express from "express";
// import Template from "../models/Template.js";

// const router = express.Router();

// // POST route to save a new template
// router.post("/", async (req, res) => {
//   try {
//     const {
//       name,
//       title,
//       phone,
//       email,
//       location,
//       profileImage,
//       aboutMe,
//       competences,
//       languages,
//       education,
//       workExperience,
//       references,
//     } = req.body;

//     const newTemplate = new Template({
//       name,
//       title,
//       phone,
//       email,
//       location,
//       profileImage,
//       aboutMe,
//       competences,
//       languages,
//       education,
//       workExperience,
//       references,
//     });

//     await newTemplate.save();
//     res.status(200).json({ message: "Template saved successfully!" });
//   } catch (error) {
//     console.error("Error saving template:", error);
//     res.status(500).json({ message: "Error saving template", error });
//   }
// });

// export default router;

import express from "express";
import Template from "../models/Template.js";

const router = express.Router();

// GET request to fetch all templates
router.get("/", async (req, res) => {
  try {
    // Fetch all templates from the database
    const templates = await Template.find(); 
    console.log("Templates fetched from database:", templates); // Debugging: Check the fetched templates

    // If no templates are found, respond with a message
    if (!templates || templates.length === 0) {
      return res.status(404).json({ message: "No templates found" });
    }

    // Send all templates as the response
    res.status(200).json(templates);
  } catch (error) {
    // Log error details for debugging
    console.error("Error fetching templates:", error);
    
    // Send an error response if something goes wrong
    res.status(500).json({ error: "Failed to fetch templates" });
  }
});

export default router;
