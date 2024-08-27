const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth'); // Import auth routes
const cors = require('cors'); // Import cors
require('dotenv').config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all origins (or customize as needed)
app.use(express.json()); // Parse JSON bodies

// Use auth routes
app.use('/api', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
