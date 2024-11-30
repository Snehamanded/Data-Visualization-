// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu-oYHOxHRJciValaMGSTxF6ECl1Br038",
  authDomain: "data-visualization-4e39b.firebaseapp.com",
  projectId: "data-visualization-4e39b",
  storageBucket: "data-visualization-4e39b.firebasestorage.app",
  messagingSenderId: "565460256253",
  appId: "1:565460256253:web:981fe2de5ca7ae91464594",
  measurementId: "G-1YQK7E7Y3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);