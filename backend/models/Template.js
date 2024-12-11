// import mongoose from "mongoose";

// const templateSchema = new mongoose.Schema({
//   name: String,
//   title: String,
//   phone: String,
//   email: String,
//   location: String,
//   profileImage: String, // Base64 image or URL
//   aboutMe: String,
//   competences: [String],
//   languages: {
//     english: String,
//     french: String,
//   },
//   education: [
//     {
//       school: String,
//       degree: String,
//       years: String,
//     },
//   ],
//   workExperience: [
//     {
//       company: String,
//       years: String,
//       description: String,
//     },
//   ],
//   references: String,
// });

// export default mongoose.model("Template", templateSchema);
import mongoose from "mongoose";

// Define schema with _id as String and other fields
const templateSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Explicitly define _id as a String
  name: String,
  title: String,
  phone: String,
  email: String,
  location: String,
  profileImage: String, // Base64 image or URL
  aboutMe: String,
  competences: [String],
  languages: {
    english: String,
    french: String,
  },
  education: [
    {
      school: String,
      degree: String,
      years: String,
    },
  ],
  workExperience: [
    {
      company: String,
      years: String,
      description: String,
    },
  ],
  references: String,
  css: String, // Add the `css` field here
  html: String, // Add the `html` field here
  data: { type: mongoose.Schema.Types.Mixed, required: true }, // Change `data` to Mixed
});

// Ensure that _id is treated as a string
templateSchema.set("strict", "throw");  // This will throw an error for invalid fields
export default mongoose.model("Template", templateSchema);
