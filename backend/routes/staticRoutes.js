const express = require('express');
const router = express.Router();
const User = require('../models/user')

// router.get('/',(req,res)=>{
//     if(!req.user){
//         return res.redirect('/auth/login')
//     }
//     res.render('home',{
//         username: req.user.username,
//     })
// })
// router.get('/auth/login',(req,res)=>{
//     if(req.user){
//         return res.redirect('/')
//     }
//     res.render('login')
// })
// router.get('/auth/register',(req,res)=>{
//     res.render('signup')
// })
router.get('/:targetUserId', async(req, res) => {
    // if(!req.user){
    //     return res.redirect('/auth/login')
    // }
    try{
        const otherUserId = req.params.targetUserId;
        const otherUser =  await User.findOne({_id: otherUserId})
        
        res.render('chat',{
            currUserName:req.user.username,
            otherUserName: otherUser.username,
        })
    }
    catch(error){
        res.json({error: error.message})
    }
})


module.exports = router;
