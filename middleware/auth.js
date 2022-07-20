const jwt = require('jsonwebtoken')
const userModel = require('../models/user.js')

const auth=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        // console.log(token)
        const verifyuser=jwt.verify(token,'shhhh');
            console.log(verifyuser);
        const user= await userModel.findOne({_id:verifyuser._id})
        // console.log(user)
        req.user=user;
        next();
    }catch(err){
        res.redirect('/')

    }


}

module.exports = auth