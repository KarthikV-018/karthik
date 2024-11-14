import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file

const LoginPage = ({ onLoginSuccess, onRegisterClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const registeredUsername = localStorage.getItem('registeredUsername');
    const registeredPassword = localStorage.getItem('registeredPassword');

    if (username === registeredUsername && password === registeredPassword) {
      onLoginSuccess();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <button onClick={onRegisterClick}>Register here</button>
      </p>
    </div>
  );
};

export default LoginPage;
