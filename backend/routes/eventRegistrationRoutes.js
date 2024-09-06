// routes/eventRegistrationRoutes.js
const express = require('express');
const router = express.Router();
const EventRegistration = require('../models/EventRegistration');

// Event Registration Route
router.post('/register-event', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      pinCode,
      eventTitle,
      eventHost,
      eventDate
    } = req.body;

    const newRegistration = new EventRegistration({
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      pinCode,
      eventTitle,
      eventHost,
      eventDate
    });

    await newRegistration.save();
    res.status(201).json({ message: 'Event registered successfully!' });
  } catch (error) {
    console.error('Event registration error:', error);
    res.status(500).json({ error: 'Failed to register for the event' });
  }
});

module.exports = router;
