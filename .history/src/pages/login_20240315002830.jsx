// LoginPage.js
import './login.scss';
// LoginPage.js

import React, { useState } from 'react';
// import './LoginPage.scss';

const LoginPage = ({ isAuthenticated, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // In a real application, you would validate user credentials
    if (username === 'admin' && password === 'password') {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
