"use client"; // Add this line to indicate it's a client-side component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import './signup.css'; // Import the CSS for styling

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Student', // Default role matches backend schema
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', formData);
      router.push('/login'); // Redirect to the login page after successful signup
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Create a New Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <fieldset className="role-selection">
          <legend>Select your role</legend>
          <label>
            <input
              type="radio"
              name="role"
              value="Teacher"
              checked={formData.role === 'Teacher'}
              onChange={handleRoleChange}
            />
            Teacher
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="Senate Member"
              checked={formData.role === 'Senate Member'}
              onChange={handleRoleChange}
            />
            Student (Senate Member)
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="Student"
              checked={formData.role === 'Student'}
              onChange={handleRoleChange}
            />
            Student
          </label>
        </fieldset>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
