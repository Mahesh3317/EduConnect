'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../../firebaseconfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import styles from './Signup.module.css';
import backgroundImage from '../../assets/images/cool-triangles-sharp-edges-abstract-wallpaper-preview.jpg';

const FormComponent = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLoginClick = () => {
    setIsSignup(false);
    setErrorMessage('');
  };

  const handleSignupClick = () => {
    setIsSignup(true);
    setErrorMessage('');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;
    const confirmPassword = isSignup ? form.elements['confirmPassword'].value : null;

    if (isSignup && password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        setErrorMessage('Signup successful!');
        router.push('/dashboard');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setErrorMessage('Login successful!');
        router.push('/dashboard');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={styles.pageWrapper} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.wrapper}>
        <div className={styles.titleText}>
          <div className={`${styles.title} ${!isSignup ? styles.activeHeading : styles.inactiveHeading}`}>
            {isSignup ? 'Create a new Account' : 'Welcome Buddy'}
          </div>
        </div>

        <div className={styles.slideControls}>
          <div
            className={`${styles.slide} ${!isSignup ? styles.active : styles.inactive}`}
            onClick={handleLoginClick}
          >
            Login
          </div>
          <div
            className={`${styles.slide} ${isSignup ? styles.active : styles.inactive}`}
            onClick={handleSignupClick}
          >
            Signup
          </div>
          <div
            className={styles.sliderTab}
            style={{ transform: isSignup ? 'translateX(100%)' : 'translateX(0%)' }}
          />
        </div>

        <div className={styles.formContainer}>
          <div
            className={styles.formInner}
            style={{ transform: isSignup ? 'translateX(-50%)' : 'translateX(0%)' }}
          >
            <form onSubmit={handleFormSubmit} className={styles.form}>
              <div className={styles.field}>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className={styles.field}>
                <input type="password" name="password" placeholder="Password" required />
              </div>
              {isSignup && (
                <div className={styles.field}>
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
                </div>
              )}
              <div className={styles.fieldBtn}>
                <input
                  type="submit"
                  value={isSignup ? 'Signup' : 'Login'}
                  className={isSignup ? styles.signupButton : styles.loginButton}
                />
              </div>
            </form>
          </div>
        </div>

        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      </div>
    </div>
  );
};

export default FormComponent;
