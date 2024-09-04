'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebaseConfig'; // Import auth and db
import styles from './Signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Student');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store role in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: role
      });

      setErrorMessage('');
      router.push('/login');  // Redirect to login after signup
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Create a New Account</h2>
        <form onSubmit={handleSignup}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div className={styles.roleSelection}>
            <label>
              <input
                type="radio"
                name="role"
                value="Teacher"
                checked={role === 'Teacher'}
                onChange={(e) => setRole(e.target.value)}
              />
              Teacher
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="SenateStudent"
                checked={role === 'SenateStudent'}
                onChange={(e) => setRole(e.target.value)}
              />
              Senate Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="Student"
                checked={role === 'Student'}
                onChange={(e) => setRole(e.target.value)}
              />
              Student
            </label>
          </div>
          <button className={styles.button} type="submit">Sign Up</button>
          {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
