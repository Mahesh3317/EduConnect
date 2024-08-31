import React from 'react';
import './eventCard.css';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={onClick}>
      <div className="event-card-content">
        {event ? (
          <>
            <img src={event.image} alt={event.title} className="event-image" />
            <h3>{event.title}</h3>
            <p>{event.hostName}</p>
            <p>{event.startDate} - {event.endDate}</p>
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
