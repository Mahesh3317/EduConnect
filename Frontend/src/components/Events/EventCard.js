'use client';
import React from 'react';
import './eventCard.css';

const EventCard = ({ event, onClick }) => {
  console.log("EventCard event:", event);

  return (
    <div className="event-card" onClick={onClick}>
      <div className="event-card-content">
        {event ? (
          <>
            <img
              src={`http://localhost:5000/${event.image}`}
              alt={event.title}
              className="event-image"
              onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
            />
            <h3>{event.title}</h3>
            <p>{event.hostName}</p>
            <p>{new Date(event.startDate).toLocaleString()} - {new Date(event.endDate).toLocaleString()}</p>
          </>
        ) : (
          <>
            <div className="event-card-icon">+</div>
            <p>Create New Events</p>
          </>
        )}
      </div>
    </div>
  );
};

export default EventCard;
