'use client';
import React, { useState } from 'react';
import './teacherDashboard.css';

const TeacherDashboard = () => {
  const [activeFeature, setActiveFeature] = useState('Events');

  const features = [
    { name: 'Dashboard', content: 'Overview of your activities.' },
    { name: 'Events', content: 'Here are all your upcoming events.' },
    { name: 'Clubs', content: 'Manage and view your clubs.' },
    { name: 'Calendar', content: 'View your teaching schedule.' },
    { name: 'Timetable', content: 'Plan and manage your timetable.' }
  ];

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
          <p>{features.find(feature => feature.name === activeFeature).content}</p>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
