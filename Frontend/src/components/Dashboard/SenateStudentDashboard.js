// src/components/Dashboard/SenateStudentDashboard.js
import React from 'react';
import EventForm from '../Events/EventForm';
import EventCard from '../Events/EventCard';

function SenateStudentDashboard({ events }) {
  return (
    <div>
      <h1>Senate Student Dashboard</h1>
      <EventForm creatorType="Senate Student" />
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default SenateStudentDashboard;
