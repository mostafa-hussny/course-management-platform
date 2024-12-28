import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Course Management Platform</h1>
      <p>Here you can browse and register for courses.</p>
      <nav>
        <Link to="/login">Go to Login</Link>
        <br />
        <Link to="/course-details">View Course Details</Link>
      </nav>
    </div>
  );
};

export default HomePage;
