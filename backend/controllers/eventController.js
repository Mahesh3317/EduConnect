const Event = require('../models/Event');

// Create Event
exports.createEvent = async (req, res) => {
  const { title, picture, startDate, endDate, description, hostName } = req.body;

  try {
    const event = new Event({
      title,
      picture,
      startDate,
      endDate,
      description,
      hostName,
      createdBy: req.user.id,
    });

    await event.save();
    res.status(201).json({ success: true, event });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('createdBy', 'name');
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
