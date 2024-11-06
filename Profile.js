import React, { useState } from 'react';
import axios from 'axios';
import '../styles/profile.css';

const Profile = () => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.post(
        'http://localhost:5000/api/posts',
        { content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Post created successfully');
      setContent('');
    } catch (error) {
      setMessage('Error creating post');
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
        />
        <button type="submit">Post</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Profile;
