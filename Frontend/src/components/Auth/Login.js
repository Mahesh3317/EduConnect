'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for app directory
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login data to the backend API
      const res = await axios.post('http://localhost:5000/api/login', formData);
      if (res.data.success) {
        // Store token and redirect to the dashboard
        localStorage.setItem('token', res.data.token);
        router.push('/dashboard');
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err.message);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
