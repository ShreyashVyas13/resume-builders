// import express from 'express';
// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';
// import cors from 'cors';  // Import CORS
// import dotenv from 'dotenv';

// dotenv.config();
// const app = express();

// // Middleware
// app.use(express.json());  // To parse incoming JSON data
// app.use(cors());  // Enable CORS, this should be added here

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// // Define User Schema
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// // Create User Model
// const User = mongoose.model('User', userSchema);

// // Sign Up Route
// app.post('/api/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save user to database
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // Login Route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (!existingUser) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, existingUser.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Passwords match, login successful
//     res.status(200).json({ message: 'Login successful', user: existingUser });

//   } catch (error) {
//     console.error(error);  // Log the error to the console
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// import express from 'express';
// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();
// const app = express();

// // Middleware
// app.use(express.json()); // To parse incoming JSON data
// app.use(cors({ origin: '*' }));

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error("MongoDB Connection Error:", err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model('User', userSchema);

// // Contact Schema
// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// const Contact = mongoose.model('Contact', contactSchema);

// // Sign Up Route
// app.post('/api/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email: email.trim() });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password.trim(), 10);

//     const newUser = new User({
//       name: name.trim(),
//       email: email.trim(),
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error("Signup Error:", error);
//     res.status(500).json({ message: 'Server Error during signup', error });
//   }
// });

// // Login Route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email: email.trim() });
//     if (!existingUser) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const isMatch = await bcrypt.compare(password.trim(), existingUser.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     res.status(200).json({ message: 'Login successful', user: existingUser });
//   } catch (error) {
//     console.error("Login Error:", error);
//     res.status(500).json({ message: 'Server Error during login', error });
//   }
// });

// // Contact Form Route
// app.post('/api/contact', async (req, res) => {
//   const { name, email, message } = req.body;

//   console.log("Received contact form data:", { name, email, message });

//   try {
//     if (!name || !email || !message) {
//       console.error("Validation Error: Missing fields");
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const newContact = new Contact({
//       name: name.trim(),
//       email: email.trim(),
//       message: message.trim()
//     });

//     await newContact.save();
//     console.log("Contact form data saved successfully");
//     res.status(201).json({ message: 'Contact form submitted successfully' });
//   } catch (error) {
//     console.error("Contact Submission Error:", error);
//     res.status(500).json({ message: 'Server Error during contact form submission', error });
//   }
// });

// // Admin Overview section
// app.get("/api/admin/overview", async (req, res) => {
//   try {
//     const usersCount = await User.countDocuments(); // Count total users
//     const feedbackCount = await Contact.countDocuments(); // Count feedback messages

//     res.status(200).json({
//       users: usersCount,
//       feedback: feedbackCount,
//     });
//   } catch (error) {
//     console.error("Error fetching overview data:", error);
//     res.status(500).json({ message: "Server Error", error });
//   }
// });

// // Fetch the user data

// // Admin Users section - fetch all users
// app.get("/api/admin/users", async (req, res) => {
//   try {
//     const users = await User.find(); // Fetch all users from the database
//     res.status(200).json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ message: "Server Error", error });
//   }
// });

// // Admin Delete user
// app.delete("/api/admin/users/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     // Find the user by id and delete it
//     const user = await User.findByIdAndDelete(id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     res.status(500).json({ message: "Server Error", error });
//   }
// });

// // Admin Update user
// app.put('/api/admin/users/:id', async (req, res) => {
//   const { id } = req.params; // Get the user ID from the URL
//   const { name, email } = req.body; // Get the updated user data from the request body

//   try {
//     // Find the user by ID and update the name and email fields
//     const updatedUser = await User.findByIdAndUpdate(
//       id,
//       { name: name.trim(), email: email.trim() },
//       { new: true } // Return the updated document
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' }); // Handle case where user doesn't exist
//     }

//     res.status(200).json(updatedUser); // Respond with the updated user data
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({ message: 'Server Error during user update', error });
//   }
// });

// // Admin Feedback section
// app.get("/api/admin/feedback", async (req, res) => {
//   try {
//     const feedback = await Contact.find(); // Fetch all feedback from the database
//     res.status(200).json(feedback);
//   } catch (error) {
//     console.error("Error fetching feedback:", error);
//     res.status(500).json({ message: "Server Error", error });
//   }
// });
// // Edit this
// app.put('/api/admin/feedback/:id', (req, res) => {
//   const feedbackId = req.params.id;
//   console.log(`Updating feedback with ID: ${feedbackId}`);
//   res.send(`Feedback with ID: ${feedbackId} updated`);
// });
// // Delete feedback
// app.delete('/feedback/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     // Assuming you have a feedback model (replace with your model)
//     const feedback = await Contact.findByIdAndDelete(id);
//     if (!feedback) {
//       return res.status(404).json({ message: 'Feedback not found' });
//     }
//     res.status(200).json({ message: 'Feedback deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // To parse incoming JSON data
app.use(cors({ origin: '*' }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Sign Up Route
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email.trim() });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    const newUser = new User({
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: 'Server Error during signup', error });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email.trim() });
    if (!existingUser) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password.trim(), existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user: existingUser });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: 'Server Error during login', error });
  }
});

// Contact Form Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received contact form data:", { name, email, message });

  try {
    if (!name || !email || !message) {
      console.error("Validation Error: Missing fields");
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newContact = new Contact({
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    });

    await newContact.save();
    console.log("Contact form data saved successfully");
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error("Contact Submission Error:", error);
    res.status(500).json({ message: 'Server Error during contact form submission', error });
  }
});

// Admin Overview section
app.get("/api/admin/overview", async (req, res) => {
  try {
    const usersCount = await User.countDocuments(); // Count total users
    const feedbackCount = await Contact.countDocuments(); // Count feedback messages

    res.status(200).json({
      users: usersCount,
      feedback: feedbackCount,
    });
  } catch (error) {
    console.error("Error fetching overview data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

// Fetch the user data

// Admin Users section - fetch all users
app.get("/api/admin/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

// Admin Delete user
app.delete("/api/admin/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Find the user by id and delete it
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

// Admin Update user
app.put('/api/admin/users/:id', async (req, res) => {
  const { id } = req.params; // Get the user ID from the URL
  const { name, email } = req.body; // Get the updated user data from the request body

  try {
    // Find the user by ID and update the name and email fields
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name: name.trim(), email: email.trim() },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' }); // Handle case where user doesn't exist
    }

    res.status(200).json(updatedUser); // Respond with the updated user data
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server Error during user update', error });
  }
});

// Admin Feedback section
app.get("/api/admin/feedback", async (req, res) => {
  try {
    const feedback = await Contact.find(); // Fetch all feedback from the database
    res.status(200).json(feedback);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});
// Edit this
app.put('/api/admin/feedback/:id', (req, res) => {
  const feedbackId = req.params.id;
  console.log(`Updating feedback with ID: ${feedbackId}`);
  res.send(`Feedback with ID: ${feedbackId} updated`);
});
// Delete feedback
app.delete('/feedback/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Assuming you have a feedback model (replace with your model)
    const feedback = await Contact.findByIdAndDelete(id);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
