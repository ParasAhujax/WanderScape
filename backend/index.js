// Import required modules
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const config = require('./config');
const cookieParser = require('cookie-parser');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static('public'))


app.set('view engine','ejs')
app.set('views','./views')

// Load environment variables from .env file
dotenv.config();

const {checkAuth} = require('./middleware/authMiddleware');
app.use(checkAuth)

// Database connection
mongoose.connect(process.env.DB_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

const sendMessage = require('./sockets/chatSocket');
sendMessage(io);

const authRoutes = require('./routes/authRoutes');
const exploreRoutes = require('./routes/exploreRoutes');
const messageRoutes = require('./routes/messageRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const userRoutes = require('./routes/userRoutes');
const staticRoute = require('./routes/staticRoutes');

app.use('/',staticRoute)

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/explore', exploreRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/post', postRoutes);
app.use('/api/profile', profileRoutes);
// app.use('/api/user', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
