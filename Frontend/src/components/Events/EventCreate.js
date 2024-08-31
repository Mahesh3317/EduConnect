'use client';
import React, { useState } from 'react';
import './eventCreate.css'; // Your CSS file

const EventCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [hostName, setHostName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [image, setImage] = useState(null);

  // Helper function to format date in 12-hour format with AM/PM
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()} ${hours}:${formattedMinutes} ${ampm}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
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
    
    // Clear the form
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
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventCreate;
