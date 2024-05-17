// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC9B3zVgRHtFEKsR9fp6u-_ev8KGp2GVM",
  authDomain: "stillmilkylive.firebaseapp.com",
  projectId: "stillmilkylive",
  storageBucket: "stillmilkylive.appspot.com",
  messagingSenderId: "285496391855",
  appId: "1:285496391855:web:e2748ec36581f5af9a7c5a",
  measurementId: "G-6R19NX9LE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export Firestore (and Analytics if needed)
export { db, analytics };
