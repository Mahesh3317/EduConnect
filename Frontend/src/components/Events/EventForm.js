// Frontend/src/components/Events/EventForm.js
import React, { useState } from 'react';
import './eventForm.css';

const EventForm = ({ creatorType }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    startDate: '',
    endDate: '',
    description: '',
    host: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle event creation logic here, e.g., send data to backend
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <input type="text" name="title" placeholder="Event Title" onChange={handleChange} />
      <input type="file" name="image" placeholder="Event Image" onChange={handleChange} />
      <input type="datetime-local" name="startDate" onChange={handleChange} />
      <input type="datetime-local" name="endDate" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <input type="text" name="host" placeholder="Host Name" onChange={handleChange} />
      <input type="hidden" name="creatorType" value={creatorType} />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
