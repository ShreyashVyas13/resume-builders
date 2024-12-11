import mongoose from "mongoose";
import Template from "./models/Template.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/resumeBuilder", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");

    const template = new Template({
        
            "_id": "template1",
            "name": "Template 1",
            "css": "body { font-family: Arial, sans-serif; } .resume { padding: 20px; border: 1px solid #ddd; } .header { text-align: center; font-size: 24px; font-weight: bold; }",
            "html": "<div class='resume'><div class='header'>{{name}}</div><p>{{title}}</p><p>Phone: {{phone}}</p><p>Email: {{email}}</p><p>Location: {{location}}</p><img src='{{profileImage}}' alt='Profile Image'/><h3>About Me</h3><p>{{aboutMe}}</p><h3>Competences</h3><ul>{{#each competences}}<li>{{this}}</li>{{/each}}</ul><h3>Languages</h3><ul><li>English: {{languages.english}}</li><li>French: {{languages.french}}</li></ul><h3>Education</h3><ul>{{#each education}}<li>{{school}} - {{degree}} ({{years}})</li>{{/each}}</ul><h3>Work Experience</h3><ul>{{#each workExperience}}<li>{{company}} ({{years}}): {{description}}</li>{{/each}}</ul><h3>References</h3><p>{{references}}</p></div>",
            "data": {
              "name": "",
              "title": "",
              "phone": "",
              "email": "",
              "location": "",
              "profileImage": "/images/prof.png",
              "aboutMe": "",
              "competences": ["", "", "", ""],
              "languages": {
                "english": "",
                "french": ""
              },
              "education": [
                { "school": "", "degree": "", "years": "" },
                { "school": "", "degree": "", "years": "" },
                { "school": "", "degree": "", "years": "" }
              ],
              "workExperience": [
                { "company": "", "years": "", "description": "" },
                { "company": "", "years": "", "description": "" },
                { "company": "", "years": "", "description": "" }
              ],
              "references": ""
            }         
    });

    return template.save();
  })
  .then(() => {
    console.log("Template saved");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
