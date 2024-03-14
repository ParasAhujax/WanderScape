const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    dbURL: process.env.DB_URL,
    jwtSecret: process.env.JWT_SECRET,
    expiresIn: process.env.EXPIRES_IN,
};
