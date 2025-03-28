import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Optional, for global styles

// Get the root element from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);