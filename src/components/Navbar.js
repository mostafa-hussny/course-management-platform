import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  // دالة لتسجيل الخروج
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username'); 
    navigate('/login'); 
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Course Platform</h2>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/course-details">Course Details</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        {localStorage.getItem('isAuthenticated') === 'true' && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
























