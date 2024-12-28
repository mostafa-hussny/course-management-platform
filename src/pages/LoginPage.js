import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (username === '' || password === '') {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    if (username === 'mmm' && password === '123') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', username); 

      navigate('/');
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        {errorMessage && <p className="error-message">{errorMessage}</p>} 
        <button type="submit">Login</button>
      </form>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
    </div>
  );
};

export default LoginPage;

