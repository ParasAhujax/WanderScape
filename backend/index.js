// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const config = require('./config');
const cookieParser = require('cookie-parser');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());


// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/wanderscape")
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

const authRoutes = require('./routes/authRoutes');
const exploreRoutes = require('./routes/exploreRoutes');
const messageRoutes = require('./routes/messageRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const userRoutes = require('./routes/userRoutes');

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/explore', exploreRoutes);
// app.use('/api/message', messageRoutes);
// app.use('/api/post', postRoutes);
// app.use('/api/profile', profileRoutes);
// app.use('/api/user', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
