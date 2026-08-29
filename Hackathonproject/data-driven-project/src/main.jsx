// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Use createRoot from react-dom/client in React 18
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create root for React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
