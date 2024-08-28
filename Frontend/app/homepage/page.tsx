// Frontend/educonnect/app/page.tsx
import React from 'react';
import Link from 'next/link';
import './globals.css'; // Import global styles

const HomePage = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">EduConnect</div>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/signup">Signup</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to EduConnect</h1>
          <p>Connect, learn, and grow with our platform</p>
          <Link href="/signup"><button className="cta-button">Get Started</button></Link>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 EduConnect. All rights reserved.</p>
        <div className="social-icons">
          {/* Add social media icons here */}
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
