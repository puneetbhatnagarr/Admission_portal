
class frontcontroller  {
    
    static home = async(req,res)=>{
        try{

            const data = req.user
            res.render('home',{data:data});
    
        }catch(error){
            // console.log(error)
        }

      
    }

    static about = async(req,res)=>{

        res.render('about')
    }
    static contact = async(req,res)=>{

        res.render('contact')
    }

    static teacher = async(req,res)=>{

        res.render('teacher')
    }


   
}


module.exports = frontcontroller;