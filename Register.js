import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './reg.css'; // Make sure this file contains your styles

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        // Perform your registration logic here
        if (password !== confirmPassword) {
            setMessage("Passwords don't match.");
            return;
        }

        try {
            // Call your API for registration here
            // await axios.post('/api/register', { email, password });
            setMessage('Registration successful!');
            navigate('/login'); // Redirect to login after successful registration
        } catch (error) {
            console.error('Registration error:', error);
            setMessage('Error during registration. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            {message && <p className="message">{message}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            <p>
                Already have an account? <span onClick={() => navigate('/login')}>Login</span>
            </p>
        </div>
    );
}

export default Register;
