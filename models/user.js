const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema =new mongoose.Schema({
    username: {type:String, 
        required: true,
    },

	email: {
        type:String, 
        required: true,
        unique: true, 
        },
    password: {
        type:String, 
        required: true
    },

    role:{
        type:String,
        default:1
    },

    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
    
    
},{timestamps:true});


// defining token

userSchema.methods.generateAuthToken = async function(){  // method use kia hai doc ke object ko use karne ke liye
    try{
        const token1 = jwt.sign({ _id:this._id.toString() }, 'shhhh');
        // console.log(token) // this is for class and object ki property  ko use karene ke liye
        this.tokens = this.tokens.concat({token:token1})
        await this.save()
        return token1
    }catch(error){
        console.log(error)

    }
}

var userModel = mongoose.model('users', userSchema);
module.exports=userModel;