// Frontend/src/components/Homepage/Homepage.js
'use client';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import EventCard from '../Events/EventCard'; // Import EventCard component
import './homepage.model.css'; // Import specific styles for Homepage

const Homepage = () => {
  // Sample event data; replace with dynamic data as needed
  const events = [
    {
      title: 'Math Workshop',
      hostName: 'Dr. Smith',
      startDate: '2024-09-01T10:00',
      endDate: '2024-09-01T12:00',
      image: '/assets/event1.jpg',
    },
    {
      title: 'Science Fair',
      hostName: 'Prof. Johnson',
      startDate: '2024-09-05T14:00',
      endDate: '2024-09-05T17:00',
      image: '/assets/event2.jpg',
    }
  ];

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
          {events.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              onClick={() => window.location.href = `/event/${index}`}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
