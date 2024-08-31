// models/Event.js
const mongoose = require('mongoose');

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
    type: String, // To store formatted date string
    required: true,
  },
  endDate: {
    type: String, // To store formatted date string
    required: true,
  },
  image: {
    type: String, // URL for the event image
    required: true,
  },
});

module.exports = mongoose.model('Event', eventSchema);
