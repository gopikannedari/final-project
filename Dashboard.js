// components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import './dashboard.css';



function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <button onClick={() => navigate('/profile')}>Go to Profile</button>
      <PostForm />
    </div>
  );
}

export default Dashboard;
