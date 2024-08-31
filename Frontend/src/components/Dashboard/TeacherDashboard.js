'use client';
import React, { useState } from 'react';
import './teacherDashboard.css';
import EventCard from '../Events/EventCard';
import EventCreate from '../Events/EventCreate';

const TeacherDashboard = () => {
  const [activeFeature, setActiveFeature] = useState('Events');
  const [showEventCreate, setShowEventCreate] = useState(false);
  const [events, setEvents] = useState([]);

  const features = [
    { name: 'Dashboard', content: 'Overview of your activities.' },
    { name: 'Events', content: 'Here are all your upcoming events.' },
    { name: 'Clubs', content: 'Manage and view your clubs.' },
    { name: 'Calendar', content: 'View your teaching schedule.' },
    { name: 'Timetable', content: 'Plan and manage your timetable.' }
  ];

  const handleCardClick = () => {
    setShowEventCreate(true);
  };

  const handleCreateEvent = (eventData) => {
    setEvents([eventData, ...events]);
    setShowEventCreate(false);
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
          {activeFeature === 'Events' && !showEventCreate && (
            <div className="events-section">
              <div className="event-card-container">
                <EventCard onClick={handleCardClick} />
                {events.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </div>
          )}
          {activeFeature === 'Events' && showEventCreate && (
            <EventCreate onCreate={handleCreateEvent} />
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
