// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { MdDashboard, MdAssignment, MdSettings, MdHelpOutline } from 'react-icons/md';
import { FaProjectDiagram, FaPlusCircle, FaUserAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">Dashyat</div>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/dashboard" className="menu-item">
                <MdDashboard className="menu-icon" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/projects" className="menu-item">
                <FaProjectDiagram className="menu-icon" />
                Projects
              </Link>
            </li>
            <li>
              <Link to="/tasks" className="menu-item">
                <MdAssignment className="menu-icon" />
                Tasks
              </Link>
            </li>
            <li>
              <Link to="/settings" className="menu-item">
                <MdSettings className="menu-icon" />
                Settings
              </Link>
            </li>
            <li>
              <Link to="/help" className="menu-item">
                <MdHelpOutline className="menu-icon" />
                Help
              </Link>
            </li>
          </ul>
        </nav>
        <div className="add-project">
          <button className="add-btn">
            <FaPlusCircle className="add-icon" />
            Add New Project
          </button>
        </div>
      </aside>

      <main className="main-content">
        <div className="welcome-section">
          <h2>Hello, [Username]</h2>
          <p>You have an unfinished job. You have 3 tasks left to complete.</p>
        </div>

        <div className="widgets-section">
          <div className="widget">
            <FaUserAlt className="widget-icon" />
            <h3>Widget 1</h3>
            <p>Details for widget 1</p>
          </div>
          <div className="widget">
            <FaUserAlt className="widget-icon" />
            <h3>Widget 2</h3>
            <p>Details for widget 2</p>
          </div>
          <div className="widget">
            <FaUserAlt className="widget-icon" />
            <h3>Widget 3</h3>
            <p>Details for widget 3</p>
          </div>
        </div>

        <div className="profile-section">
          <div className="profile-card">
            <img src="path_to_profile_image" alt="Profile" className="profile-img" />
            <h4>Zaenal Suep</h4>
            <p>70% You're Progress</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
