import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks, FaUsers, FaCloud, FaPlug, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Boost Your Productivity with [Software Name]</h1>
          <p>Automate your workflow and simplify tasks.</p>
          <button className="cta-button">
            <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Start Free Trial</Link>
          </button>
        </div>
        <div className="hero-image">
          {/* Replace with an icon or remove */}
          <FaTasks size={500} />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaTasks size={80} />
            <h3>Automate Tasks</h3>
            <p>Easily automate routine tasks and improve efficiency.</p>
          </div>
          <div className="feature-item">
            <FaUsers size={80} />
            <h3>Collaborate in Real-Time</h3>
            <p>Work together with your team in real-time from anywhere.</p>
          </div>
          <div className="feature-item">
            <FaCloud size={80} />
            <h3>Secure Cloud Storage</h3>
            <p>All your data securely stored in the cloud with encryption.</p>
          </div>
          <div className="feature-item">
            <FaPlug size={80} />
            <h3>Easy Integration</h3>
            <p>Integrates seamlessly with your favorite tools.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <IoMdPerson size={80} />
            <p>"This tool has transformed the way we collaborate. Highly recommend!"</p>
            <span>— User 1, Company A</span>
          </div>
          <div className="testimonial-item">
            <IoMdPerson size={80} />
            <p>"Automating our tasks was a game changer for our team!"</p>
            <span>— User 2, Company B</span>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="demo-section">
        <h2>See It in Action</h2>
        <div className="demo-container">
          {/* Replace with an icon or remove */}
          <FaTasks size={700} />
          <p>See how our intuitive interface makes managing your tasks a breeze.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-links">
          <a href="/pricing">Pricing</a>
          <a href="/faq">FAQs</a>
          <a href="/support">Support</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className="footer-social">
          <a href="https://linkedin.com">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com">
            <FaTwitter size={30} />
          </a>
          <a href="https://facebook.com">
            <FaFacebook size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
