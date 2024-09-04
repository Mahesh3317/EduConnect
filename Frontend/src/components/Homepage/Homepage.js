'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import EventCard from '../Events/EventCard'; // Import EventCard component
import './homepage.model.css'; // Import specific styles for Homepage

const Homepage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (!response.ok) {
          throw new Error('Error fetching events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleCardClick = (eventId) => {
    // Redirect to the event details page with the event ID
    window.location.href = `/event/${eventId}`;
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to EduConnect</h1>
          <p>Connect, learn, and grow with our platform</p>
          <a href="/signup" className="cta-button">Get Started</a>
        </div>
      </section>
      <section className="features">
        <div className="feature-item">
          <h3>Interactive Learning</h3>
          <p>Join live classes and interactive sessions with expert educators.</p>
        </div>
        <div className="feature-item">
          <h3>Event Management</h3>
          <p>Manage and participate in events seamlessly.</p>
        </div>
        <div className="feature-item">
          <h3>Community Driven</h3>
          <p>Engage with a vibrant community of learners and educators.</p>
        </div>
      </section>
      <section className="events-homepage">
        <h2>Upcoming Events</h2>
        <div className="event-card-container">
          {events.map((event) => (
            <EventCard
              key={event.id} // Use unique ID for key
              event={event}
              onClick={() => handleCardClick(event.id)} // Pass event ID to the click handler
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
