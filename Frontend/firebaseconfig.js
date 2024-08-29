// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdktpFaWpKe5rQDjwAzV24ZnjPjUxyvO0",
  authDomain: "test-fd28a.firebaseapp.com",
  projectId: "test-fd28a",
  storageBucket: "test-fd28a.appspot.com",
  messagingSenderId: "360661147204",
  appId: "1:360661147204:web:84c022056d616e9eb7a611",
  measurementId: "G-E6WD67PLJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
