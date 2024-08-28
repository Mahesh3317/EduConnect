// routes/event.js
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { createEvent, getEvents } = require('../controllers/eventController');

// Protect event creation route
router.post('/create', auth, createEvent);

// Public route to get events
router.get('/all', getEvents);

module.exports = router;
