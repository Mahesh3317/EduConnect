import React from 'react';
import './Dashboard.css';

const SenateDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Senate Member Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <div className="dashboard-card">
          <h2>Manage Events</h2>
          <p>Coordinate and manage student events and activities.</p>
        </div>
        <div className="dashboard-card">
          <h2>Communication</h2>
          <p>Communicate with other senate members and students.</p>
        </div>
        <div className="dashboard-card">
          <h2>Reports</h2>
          <p>View and manage reports related to student activities.</p>
        </div>
      </main>
    </div>
  );
};

export default SenateDashboard;
