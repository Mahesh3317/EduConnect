// Frontend/src/components/Events/EventDetails.js
'use client';
import React from 'react';
import { useRouter } from 'next/router';
import './eventDetails.css'; // Import specific styles for EventDetails

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Sample data; replace with actual data fetching
  const events = [
    {
      title: 'Math Workshop',
      hostName: 'Dr. Smith',
      startDate: '2024-09-01T10:00',
      endDate: '2024-09-01T12:00',
      description: 'An engaging workshop on advanced mathematics.',
      image: '/assets/event1.jpg',
    },
    {
      title: 'Science Fair',
      hostName: 'Prof. Johnson',
      startDate: '2024-09-05T14:00',
      endDate: '2024-09-05T17:00',
      description: 'A fair showcasing innovative science projects.',
      image: '/assets/event2.jpg',
    }
  ];

  const event = events[parseInt(id)];

  const handleOk = () => {
    window.location.href = '/';
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  if (!event) return <p>Event not found</p>;

  return (
    <div className="event-details">
  {event ? (
    <>
      <img 
        src={`http://localhost:5000/uploads/${event.image}`} 
        alt={event.title} 
        className="event-details-image" 
        onError={(e) => e.target.src = 'https://via.placeholder.com/150'} // Fallback image in case of error
      />
      <h3>{event.title}</h3>
      <p>{event.hostName}</p>
      <p>{event.startDate} - {event.endDate}</p>
      <p>{event.description}</p>
      <button onClick={handleOk}>OK</button>
      <button onClick={handleLogin}>Login</button>
    </>
  ) : (
    <p>No event details available.</p>
  )}
</div>

  );
};

export default EventDetails;
