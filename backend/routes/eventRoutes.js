// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const {
  createEvent,
  getAllEvents,
  getEventById,  // Ensure you are importing this controller function
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController');

// POST route to create an event
router.post('/events', upload.single('image'), createEvent);

// GET route to fetch all events
router.get('/events', getAllEvents);

// GET route to fetch a single event by ID (This is critical)
router.get('/events/:id', getEventById); // Make sure this is defined properly

// PUT route to update an event
router.put('/events/:id', updateEvent);

// DELETE route to delete an event
router.delete('/events/:id', deleteEvent);

module.exports = router;
