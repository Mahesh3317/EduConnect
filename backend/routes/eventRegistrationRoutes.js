const express = require('express');
const router = express.Router();
const EventRegistration = require('../models/EventRegistration');
const Event = require('../models/Event');

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

    // Create a new EventRegistration document
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

    // Find the corresponding event by its title and host (you can use the event ID if available)
    const event = await Event.findOne({ title: eventTitle, hostName: eventHost });

    if (event) {
      // Add the registered user to the event's registeredUsers array
      event.registeredUsers.push({
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        state,
        pinCode,
      });

      // Save the updated event with the new registration
      await event.save();
    }

    res.status(201).json({ message: 'Event registered successfully and associated with the event!' });
  } catch (error) {
    console.error('Event registration error:', error);
    res.status(500).json({ error: 'Failed to register for the event' });
  }
});

module.exports = router;
