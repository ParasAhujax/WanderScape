const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');
const User = require('../models/user');

exports.register = async (req, res) => {
    try {
        const userExists = await User.findOne({email: req.body.email})
        if(userExists){
            return res.json({message: 'Already registered'})
        }
        
        const usernameExists = await User.findOne({username: req.body.username})
        if(usernameExists){
            return res.json({message: 'username already exists'})
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } 
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        // Find the user by email
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Create and send JWT token
        const token = jwt.sign({ userId: user._id }, config.jwtSecret);

        res.cookie('token', token).json({ message: 'Login successful' });
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.logout = (req, res) => {
    res.clearCookie('token').json({ message: 'Logout successful' });
};
