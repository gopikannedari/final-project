import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './postForm.css'; // Ensure you create this CSS file for styling

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title || !file) {
            setMessage('Please provide a title and a file.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('file', file);

        try {
            const response = await axios.post('/api/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data); // Log the response
            setMessage('Post created successfully!');
            // Optionally clear the form
            setTitle('');
            setFile(null);
        } catch (error) {
            console.error('Error creating post:', error);
            const errorMessage = error.response?.data?.message || 'Error creating post. Please try again.';
            setMessage(errorMessage);
        }
    };

    // Function to handle cancel
    const handleCancel = () => {
        navigate(-1); // This will take the user back to the previous page
    };

    return (
        <div className="post-form">
            <h2>Create a New Post</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="file">File:</label>
                    <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
        </div>
    );
};

export default PostForm;
