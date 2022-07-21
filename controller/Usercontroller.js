const userModel = require('../models/user.js')
// const bcrypt = require("bcrypt");
const bcrypt = require('bcryptjs')
class usercontroller { 

    static signup = async(req,res)=>{

        res.render('user/signup',{message:req.flash('error')})
    }
   
    static userinsert = async(req,res)=>{
        // console.log(req.body)
        const {username,email,password,passconfirm}=req.body
        const user = await userModel.findOne({email:email})//first email schemal ka  second form ka hai
        if (user){
            req.flash('error',' ᴛʜɪꜱ ᴇᴍᴀɪʟ ɪꜱ ᴀʟʀᴇᴀᴅʏ ᴇxɪᴛꜱ 😔')
            return res.redirect('/user/signup')
        }else{
            if (username && email && password && passconfirm){
                if(password === passconfirm){
                    try{
                        const salt =await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password,salt)
                        const doc = new userModel({
                            username:username,
                            email:email,
                            password:hashPassword,
    
                        })
                        const token = await doc.generateAuthToken();
                        console.log(token)
                        await doc.save()
                        req.flash('error','Signup successfully...')
                        return res.redirect('/user/signup')
                    }catch(error){

                    }
                    
                }

            }else{
                req.flash('error',' All feild are required')
              return res.redirect('/user/signup')

            }

        }
    }

    static adminlogin = async(req,res)=>{
        try{
            const {email,password}=req.body
            if(email && password){
                const user = await userModel.findOne({email:email})
                if(user !=null){
                const isMatch = await bcrypt.compare(password,user.password)
                if((user.email===email)&& isMatch){ 
                    // console.log(user)
                    if(user.role==1){
                    const token = await user.generateAuthToken();
                    res.cookie('jwt',token)
                    
             
                 
                    res.redirect('/home')

                    }else{
                        
                        const token = await user.generateAuthToken();
                        res.cookie('jwt',token)
                        
                        res.redirect('/admin_college/dashboard')
                    }
                    

                }else{
                    req.flash('error',' email or password not valid 😔')
                    return res.redirect('/')
                }
            }else{
                req.flash('error',' you are not register user ')
                return res.redirect('/')
            }
        }       
    }
            catch(error){
            console.log(error)
    }
}
    static userlogin = async(req , res)=>{
    // console.log()
    res.render('user/login',{message:req.flash('error')})
}

   

    static logout=async(req,res)=>{
    try{
        res.clearCookie("jwt");
  // console.log("Logout Successfully")
        res.redirect('/')

    }catch(err){
        res.status(500).send(error);

    }
};

}

module.exports = usercontroller