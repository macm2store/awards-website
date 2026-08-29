// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Widget1 from './components/Dashboard/Widgets/Widget1';
import Widget2 from './components/Dashboard/Widgets/Widget2';
import Widget3 from './components/Dashboard/Widgets/Widget3';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/widget1" element={<Widget1 />} />
        <Route path="/widget2" element={<Widget2 />} />
        <Route path="/widget3" element={<Widget3 />} />
      </Routes>
    </Router>
  );
};

export default App;
