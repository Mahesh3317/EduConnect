// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // For Firestore
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJCRCfc1TLbf64_qBlCp3URZqNxDjHp50",
  authDomain: "edu-connect-a8e83.firebaseapp.com",
  projectId: "edu-connect-a8e83",
  storageBucket: "edu-connect-a8e83.appspot.com",
  messagingSenderId: "5493427453",
  appId: "1:5493427453:web:194798a99a0bc72cbec294",
  measurementId: "G-7JVHR39FLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Analytics (optional, if you are using analytics)
const analytics = getAnalytics(app);

export { auth, db, analytics };
