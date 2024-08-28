// Frontend/src/components/Dashboard/TeacherDashboard.js
import React from 'react';
import EventCard from '../Events/EventCard';
import './dashboard.css';

const TeacherDashboard = ({ events, responses }) => {
  return (
    <div className="dashboard">
      <h2>Teacher Dashboard</h2>
      <div className="event-cards">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <div className="responses">
        <h3>Event Registrations</h3>
        <ul>
          {responses.map((response, index) => (
            <li key={index}>{response.name} - {response.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherDashboard;
