// controllers/eventController.js

const Event = require('../models/Event');
const path = require('path');

// Create a new event
const createEvent = async (req, res) => {
  try {
    const { title, hostName, description, startDate, endDate } = req.body;
    const image = req.file ? req.file.path : ''; // Get the file path from multer

    const newEvent = new Event({
      title,
      hostName,
      description,
      startDate,
      endDate,
      image: image ? path.join('uploads', path.basename(image)) : ''
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: 'Error creating event', error: error.message });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching events', error: error.message });
  }
};

// Get a single event by ID (This is the FIX)
const getEventById = async (req, res) => {
  console.log('Fetching event by ID:', req.params.id); // Debugging line
  try {
    const { id } = req.params;
    // Ensure you convert the ID to a proper ObjectId type if needed
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching event', error: error.message });
  }
};

// Update an event
const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, hostName, description, startDate, endDate } = req.body;

    const event = await Event.findByIdAndUpdate(id, {
      title,
      hostName,
      description,
      startDate,
      endDate
    }, { new: true });

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: 'Error updating event', error: error.message });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting event', error: error.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById, // Export the new controller
  updateEvent,
  deleteEvent,
};
