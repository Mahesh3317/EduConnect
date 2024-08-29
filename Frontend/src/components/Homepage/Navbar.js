// Frontend/src/components/Homepage/Navbar.js
"use client";
import React from 'react';
import './navbar.model.css'; // Import specific styles for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">EduConnect</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/club">Club</a></li>
        <li><a href="/calendar">Calendar</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/signup" className="signup-btn">Signup</a></li>
        <li><a href="/login" className="login-btn">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
