const mongoose = require('mongoose');

const EventRegistrationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pinCode: { type: String, required: true },
  eventTitle: { type: String, required: true },
  eventHost: { type: String, required: true },
  eventDate: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('EventRegistration', EventRegistrationSchema);
