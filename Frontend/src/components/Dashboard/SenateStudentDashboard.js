// Frontend/src/components/SenateDashboard/SenateDashboard.js
'use client';
import React, { useState, useEffect } from 'react';
import EventCard from '../Events/EventCard';
import './teacherDashboard.css'; // Reuse styles

const SenateDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (!response.ok) {
          throw new Error('Error fetching events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleCardClick = (eventId) => {
    // Redirect to event details page with eventId
    window.location.href = `/event/${eventId}`;
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Senate Member Dashboard</h2>
        </div>
        <ul className="feature-list">
          <li className="active">Manage Events</li>
          <li>Communication</li>
          <li>Reports</li>
        </ul>
      </aside>
      <div className="content-area">
        <header className="content-header">
          <h1>Manage Events</h1>
          <div className="profile-section">
            <img
              src="https://via.placeholder.com/40"
              alt="Senate Member Profile"
              className="profile-pic"
            />
            <span className="profile-name">Alex Smith</span>
          </div>
        </header>
        <main className="content-main">
          <div className="event-card-container">
            {events.map((event) => (
              <EventCard
                key={event.id} // Assuming each event has a unique 'id'
                event={event}
                onClick={() => handleCardClick(event.id)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SenateDashboard;
