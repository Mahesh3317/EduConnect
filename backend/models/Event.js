const mongoose = require('mongoose');

// Define Event Schema
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  hostName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: String, // Formatted date string
    required: true,
  },
  endDate: {
    type: String, // Formatted date string
    required: true,
  },
  image: {
    type: String, // URL for the event image
    required: true,
  },
  registeredUsers: [
    {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      address: String,
      city: String,
      state: String,
      pinCode: String,
    }
  ]
});

module.exports = mongoose.model('Event', eventSchema);
