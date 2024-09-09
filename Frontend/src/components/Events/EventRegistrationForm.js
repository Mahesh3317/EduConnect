// EduConnect/Frontend/src/components/Events/EventRegistrationForm.tsx
'use client';
import React, { useState } from 'react';
import './EventRegistrationForm.css';

const EventRegistrationForm = ({ eventId }) => {
  console.log("Received eventId:", eventId); // Check the received eventId
  
  const [formData, setFormData] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null); // State to track errors
  const [success, setSuccess] = useState(false); // State to show success message

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set form submitting state
    setError(null); // Reset error state

    const finalFormData = {
      ...formData,
      eventId: String(eventId),  // Ensure eventId is passed as a string
    };

    try {
      const response = await fetch('http://localhost:5000/api/register-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalFormData),
      });

      if (response.ok) {
        console.log('Registration successful');
        setSuccess(true); // Mark success state
      } else {
        console.error('Registration failed');
        setError('Registration failed. Please try again.'); // Set error message
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.'); // Set error message
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="registration-form-container">
      <h2>Register for Event</h2>

      {/* Show success message */}
      {success && <p className="success-message">Registration successful!</p>}

      {/* Show error message if any */}
      {error && <p className="error-message">{error}</p>}

      {/* Render form if not successfully submitted */}
      {!success && (
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pinCode">Pin Code</label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </form>
      )}
    </div>
  );
};

export default EventRegistrationForm;
