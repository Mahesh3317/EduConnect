// Frontend/src/components/Homepage/Homepage.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './homepage.model.css'; // Import specific styles for Homepage

const Homepage = () => {
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
      <Footer />
    </div>
  );
};

export default Homepage;
