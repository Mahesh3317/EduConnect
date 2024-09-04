'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../firebase/firebaseConfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'; 
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userData = userDoc.data();
      const role = userData?.role || 'Student';

      switch (role) {
        case 'Teacher':
          router.push('/dashboard/teacher');
          break;
        case 'SenateStudent':
          router.push('/dashboard/senate-student');
          break;
        case 'Student':
        default:
          router.push('/dashboard/student');
          break;
      }

    } catch (error) {
      setError(error.message);
    }
  };

  const handleForgotPassword = () => {
    router.push('/forgot-password'); // Navigate to the ForgotPassword page
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button className={styles.button} type="submit">Login</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}

        {/* Forgot Password Link */}
        <p className={styles.forgotPassword} onClick={handleForgotPassword}>
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default Login;
