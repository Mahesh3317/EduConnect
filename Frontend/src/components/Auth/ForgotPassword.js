'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, sendPasswordResetEmail, confirmPasswordReset } from 'firebase/auth';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [resetSent, setResetSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const auth = getAuth();

  const onSubmit = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      setResetSent(true);
      alert('Password reset email sent!');
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePasswordReset = async () => {
    try {
      await confirmPasswordReset(auth, verificationCode, newPassword);
      alert('Password has been reset successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      {!resetSent ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input type="email" {...register('email', { required: true })} />
            {errors.email && <p>Email is required</p>}
          </div>
          <button type="submit">Send Reset Email</button>
        </form>
      ) : (
        <div>
          <div>
            <label>Verification Code</label>
            <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
          </div>
          <div>
            <label>New Password</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </div>
          <button onClick={handlePasswordReset}>Reset Password</button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
