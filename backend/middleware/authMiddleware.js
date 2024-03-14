const User = require('../models/user');
const jwt = require('jsonwebtoken')

async function checkAuth(req,res,next){
    try{
        const token = req.cookies.token;
        const verifiedToken = jwt.verify(token,'secret');
        const userId = verifiedToken.userId;
        const user = await User.findById(userId)

        req.user = user;
        next();
    }
    catch(err){console.log(err.message)}
}

module.exports = {checkAuth}