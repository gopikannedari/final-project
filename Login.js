import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css'; // Ensure this path is correct

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Call your API for login here
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don’t have an account?{' '}
          <span onClick={() => navigate('/register')} style={{ cursor: 'pointer', color: '#007bff' }}>
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
