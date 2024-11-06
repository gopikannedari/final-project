import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);
export const fetchPosts = () => axios.get(`${API_URL}/posts`);
export const createPost = (data, token) => axios.post(`${API_URL}/posts`, data, {
  headers: { Authorization: `Bearer ${token}` }
});
