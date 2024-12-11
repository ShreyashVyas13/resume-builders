// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import templateRoutes from './routes/templates.js';
// import mongoose from 'mongoose';

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Parse incoming JSON requests

// // Connect to DB
// connectDB();
// // Define the Resume Schema (if not already done)
// const resumeSchema = new mongoose.Schema({
//   name: String,
//   title: String,
//   phone: String,
//   email: String,
//   location: String,
//   profileImage: String,
//   aboutMe: String,
//   competences: [String],
//   languages: {
//     english: String,
//     french: String,
//   },
//   education: [
//     { school: String, degree: String, years: String },
//     { school: String, degree: String, years: String },
//     { school: String, degree: String, years: String },
//   ],
//   workExperience: [
//     { company: String, years: String, description: String },
//     { company: String, years: String, description: String },
//     { company: String, years: String, description: String },
//   ],
//   references: String,
// });

// const Resume = mongoose.model("Resume", resumeSchema);

// // Routes
// app.use('/api/templates', templateRoutes);

// // API to save resume data
// app.post('/api/resumes', async (req, res) => {
//   const {
//     name,
//     title,
//     phone,
//     email,
//     location,
//     profileImage,
//     aboutMe,
//     competences,
//     languages,
//     education,
//     workExperience,
//     references
//   } = req.body;

//   try {
//     const newResume = new Resume({
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

//     await newResume.save();
//     res.status(200).json({ message: "Resume saved successfully!" });
//   } catch (error) {
//     console.error("Error saving resume:", error);
//     res.status(500).json({ message: "Error saving resume", error });
//   }
// });

// // API to fetch all resumes
// app.get('/api/resumes', async (req, res) => {
//   try {
//     const resumes = await Resume.find();
//     res.status(200).json(resumes);
//   } catch (error) {
//     console.error("Error fetching resumes:", error);
//     res.status(500).json({ message: "Error fetching resumes", error });
//   }
// });

// const PORT = process.env.PORT || 5000;

// // Start the server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors"; // Import CORS middleware
// import templatesRoute from "./routes/templates.js";

// const app = express();

// // Middleware to parse JSON requests
// app.use(express.json()); 

// // Enable CORS for all origins
// app.use(cors({
//   origin: "http://localhost:5173", // Allow requests only from this origin
// }));


// // Mount templates route for handling requests to /api/templates
// app.use("/api/templates", templatesRoute);

// // MongoDB connection
// mongoose
//   .connect("mongodb://localhost:27017/resume-builder", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((error) => console.error("MongoDB connection error:", error));

// // Start the server on port 5000 (or a port defined in environment variables)
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import templateRoutes from './routes/templateRoutes.js'; // Adjust path as needed

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database
mongoose.connect('mongodb://localhost:27017/resumeBuilder')
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Database connection error:', err));

// Use the routes for templates
app.use('/api/templates', templateRoutes);

// Start the server
// const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
