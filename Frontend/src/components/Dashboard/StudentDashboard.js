'use client';
import './teacherDashboard.css'; /* Reuse the same CSS as Teacher Dashboard */
import React, { useState } from 'react';
// import './studentDashboard.css';

const StudentDashboard = () => {
  const [activeFeature, setActiveFeature] = useState('My Courses');

  const features = [
    { name: 'My Courses', content: 'Overview of your enrolled courses and assignments.' },
    { name: 'Grades', content: 'View your grades and performance metrics.' },
    { name: 'Events', content: 'Upcoming events and activities you might be interested in.' },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Student Dashboard</h2>
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
              alt="Student Profile"
              className="profile-pic"
            />
            <span className="profile-name">Jane Doe</span>
          </div>
        </header>
        <main className="content-main">
          <p>{features.find(feature => feature.name === activeFeature).content}</p>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
