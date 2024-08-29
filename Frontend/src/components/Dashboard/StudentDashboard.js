


// src/components/Dashboard/StudentDashboard.js
import React from 'react';
import EventCard from '../Events/EventCard';

function StudentDashboard({ events }) {
  return (
    <div>
      <h1>Student Dashboard</h1>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default StudentDashboard;
