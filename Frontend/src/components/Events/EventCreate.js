'use client';
import React, { useState } from 'react';
import './eventCreate.css';

const EventCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [hostName, setHostName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('hostName', hostName);
    formData.append('description', description);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error creating event');
      }

      const eventData = await response.json();
      onCreate(eventData);
    } catch (error) {
      console.error('Error:', error);
    }

    setTitle('');
    setHostName('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setImage(null);
  };

  return (
    <form className="event-create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Host Name"
        value={hostName}
        onChange={(e) => setHostName(e.target.value)}
        required
      />
      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="datetime-local"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventCreate;
