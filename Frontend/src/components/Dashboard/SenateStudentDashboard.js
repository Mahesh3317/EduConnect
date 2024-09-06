'use client'; // Ensure client-side rendering
import React, { useState, useEffect } from 'react';
import EventCard from '../Events/EventCard';
import './teacherDashboard.css'; // Reuse styles
import { useRouter } from 'next/navigation'; // Correct import for router

const SenateDashboard = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const router = useRouter(); // For redirecting to the registration form

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

  const handleCardClick = (event) => {
    setSelectedEvent(event); // Set the clicked event to view details
  };

  const handleJoinClick = () => {
    // Redirect to the Event Registration Form
    router.push('/event-registration');
  };

  const handleOkClick = () => {
    setSelectedEvent(null); // Close event details view
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
          {selectedEvent ? (
            <div className="event-view">
              <img 
                src={`http://localhost:5000/${selectedEvent.image}`} 
                alt={selectedEvent.title} 
                className="event-view-image" 
              />
              <h3>{selectedEvent.title}</h3>
              <p>{selectedEvent.hostName}</p>
              <p>{selectedEvent.startDate} - {selectedEvent.endDate}</p>
              <p>{selectedEvent.description}</p>
              <button onClick={handleOkClick}>OK</button>
              <button onClick={handleJoinClick}>JOIN</button>
            </div>
          ) : (
            <div className="event-card-container">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={() => handleCardClick(event)}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SenateDashboard;
