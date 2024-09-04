'use client';
import React, { useState, useEffect } from 'react';
import './teacherDashboard.css';
import EventCard from '../Events/EventCard';
import EventCreate from '../Events/EventCreate';

const TeacherDashboard = () => {
  const [activeFeature, setActiveFeature] = useState('Events');
  const [showEventCreate, setShowEventCreate] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isViewingEvent, setIsViewingEvent] = useState(false);

  const features = [
    { name: 'Dashboard', content: 'Overview of your activities.' },
    { name: 'Events', content: 'Here are all your upcoming events.' },
    { name: 'Clubs', content: 'Manage and view your clubs.' },
    { name: 'Calendar', content: 'View your teaching schedule.' },
    { name: 'Timetable', content: 'Plan and manage your timetable.' }
  ];

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
    setSelectedEvent(event);
    setIsViewingEvent(true);
  };

  const handleCreateEvent = (eventData) => {
    setEvents([eventData, ...events]);
    setShowEventCreate(false);
  };

  const handleEditEvent = () => {
    setShowEventCreate(true);
    setIsViewingEvent(false);
  };

  const handleCloseEventView = () => {
    setIsViewingEvent(false);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Teacher Dashboard</h2>
        </div>
        <ul className="feature-list">
          {features.map((feature, index) => (
            <li
              key={index}
              className={activeFeature === feature.name ? 'active' : ''}
              onClick={() => setActiveFeature(feature.name)}
            >
              {feature.name}
            </li>
          ))}
        </ul>
      </aside>
      <div className="content-area">
        <header className="content-header">
          <h1>{activeFeature}</h1>
          <div className="profile-section">
            <img
              src="https://via.placeholder.com/40"
              alt="Teacher Profile"
              className="profile-pic"
            />
            <span className="profile-name">John Doe</span>
          </div>
        </header>
        <main className="content-main">
          {activeFeature === 'Events' && !showEventCreate && !isViewingEvent && (
            <div className="events-section">
              <div className="event-card-container">
                <EventCard onClick={() => setShowEventCreate(true)} />
                {events.map((event, index) => (
                  <EventCard key={index} event={event} onClick={() => handleCardClick(event)} />
                ))}
              </div>
            </div>
          )}
          {activeFeature === 'Events' && showEventCreate && (
            <EventCreate onCreate={handleCreateEvent} />
          )}
          {isViewingEvent && selectedEvent && (
            <div className="event-view">
              <img 
                src={`http://localhost:5000/uploads/${selectedEvent.image}`} 
                alt={selectedEvent.title} 
                className="event-view-image" 
              />
              <h3>{selectedEvent.title}</h3>
              <p>{selectedEvent.hostName}</p>
              <p>{selectedEvent.startDate} - {selectedEvent.endDate}</p>
              <p>{selectedEvent.description}</p>
              <button onClick={handleCloseEventView}>OK</button>
              <button onClick={handleEditEvent}>Edit</button>
            </div>
          )}
          {activeFeature !== 'Events' && (
            <p>{features.find(feature => feature.name === activeFeature).content}</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
