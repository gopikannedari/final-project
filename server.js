// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const fileRoutes = require('./routes/file');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('DB connection error:', error));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/files', fileRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
