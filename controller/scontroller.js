const studentModel = require('../models/studentuser.js')
class scontroller {

    static studentDoc = async(req,res)=>{
        res.render('/home');
    }

    static studentinsert = async(req,res)=>{
        console.log(req.body)
        try{
        const {n,mail,p,a,g,clg,course,user_id}=req.body
        const doc = new studentModel({
            name:n,
            mail:mail,
            phone:p,
            address:a,
            gender:g,
            college:clg,
            course:course,
            user_id:user_id

            })
            const studentresult = await doc.save()
            res.redirect('/home')
        }catch(error){
                console.log(error)
            }

       

    }

    static studentview = async(req,res)=>{
        try{
            const {_id}=req.user;
          
            const store = await studentModel.find({user_id:_id})
            console.log(store)
            res.render('user/userdisplay',{data1:store})
    
        }catch(error){
            console.log(error)
        }
        res.render('user/userdisplay');
        
    }

    static studentedit = async(req,res)=>{
        const doc = await studentModel.findById(req.params.id)
        
        res.render('user/edit',{data1:doc});
    }

    static studentupdate = async(req,res)=>{
      

            const doc = await studentModel.findByIdAndUpdate(req.params.id,{
             
                    name:req.body.na,
                    mail:req.body.em,
                    phone:req.body.ph,
                    address:req.body.a,
                    college:req.body.coll,
                    course:req.body.cour

            })
            await doc.save()
            res.redirect('/user/userdisplay')

       
        
        
        
    }

}

module.exports = scontroller