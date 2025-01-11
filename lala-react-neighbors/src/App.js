import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HelpPage from './components/HelpPage';
import './App.css'; // Import the CSS file
import wildfireImage from './assets/wildfire.jpg'; // Import the image

const HomePage = () => {
  return (
    <div className="home-container">
      <img src={wildfireImage} alt="Wildfire" className="wildfire-image" />
      <h1>Welcome to the Wildfire Assistance App</h1>
      <div className="button-container">
        <Link to="/help/need">
          <button className="help-button">I Need Help</button>
        </Link>
        <Link to="/help/want">
          <button className="help-button">I Want to Help</button>
        </Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/help/:type" element={<HelpPage />} />
      </Routes>
    </Router>
  );
};

export default App;