import React, { useState } from 'react';
import EventCreate from './EventCreate';
import EventCard from './EventCard';

const EventManager = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCreateEvent = (eventData) => {
    console.log('Creating event:', eventData);
    // Add logic to create a new event, e.g., save to server or state
    setSelectedEvent(null); // Reset selected event after creation
  };

  const handleEditEvent = (eventData) => {
    console.log('Editing event:', eventData);
    // Add logic to update the event, e.g., save to server or state
  };

  return (
    <div>
      {/* Example list of events */}
      <EventCard
        event={selectedEvent}
        onClick={() => {/* Handle card click */}}
        onEdit={handleEditEvent}
      />
      <EventCreate
        onCreate={handleCreateEvent}
        initialData={selectedEvent} // Pass event data for editing
      />
    </div>
  );
};

export default EventManager;
