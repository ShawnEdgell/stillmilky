import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { addTestData, getTestData } from './firestore'; // Import the test functions

addTestData(); // Add test data to Firestore
getTestData(); // Retrieve test data from Firestore


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
