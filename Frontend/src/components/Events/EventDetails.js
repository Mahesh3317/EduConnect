'use client'; // Ensure this is a Client Component

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router

const EventDetails = ({ id }) => {
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return; // Early return if `id` is not available

    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/events/${id}`);
        if (!response.ok) {
          throw new Error('Error fetching event details');
        }
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Error:', error);
        setError('Could not load event details.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleOk = () => {
    window.location.href = '/';
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  if (loading) return <p>Loading event details...</p>;

  if (error) return <p>{error}</p>;

  if (!event) return <p>Event not found.</p>;

  return (
    <div className="event-details">
      <img
        src={`http://localhost:5000/${event.image}`}
        alt={event.title}
        className="event-details-image"
        onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
      />
      <h3>{event.title}</h3>
      <p>{event.hostName}</p>
      <p>{new Date(event.startDate).toLocaleString()} - {new Date(event.endDate).toLocaleString()}</p>
      <p>{event.description}</p>
      <button onClick={handleOk}>BACK</button>
      <button onClick={() => handleJoinClick(event.id)}>JOIN</button>
    </div>
  );
};

export default EventDetails;
