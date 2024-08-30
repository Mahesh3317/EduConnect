import React from 'react';
import './Dashboard.css';

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Student Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <div className="dashboard-card">
          <h2>My Courses</h2>
          <p>Overview of your enrolled courses and assignments.</p>
        </div>
        <div className="dashboard-card">
          <h2>Grades</h2>
          <p>View your grades and performance metrics.</p>
        </div>
        <div className="dashboard-card">
          <h2>Events</h2>
          <p>Upcoming events and activities you might be interested in.</p>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
