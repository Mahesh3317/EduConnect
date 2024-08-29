const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth'); 
const cors = require('cors');
require('dotenv').config(); 

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); 
app.use(express.json()); 

// Routes
app.use('/api', authRoutes); 

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
