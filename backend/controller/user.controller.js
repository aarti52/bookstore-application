import User from '../model/user.model.js'
import bycrypt from 'bcryptjs'
export const signup=async(req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        const user=await User.findOne({email})
        if(user)
        {
            return res.status(400).json({message:'user already exists'})
        }
        const hashpassword= await bycrypt.hash(password,10)
        const newuser=new User({
            fullname:fullname,
            email:email,
            password:hashpassword
        })
        await newuser.save();

        res.status(201).json({
            message:'user registered successfully',
            user:{
                fullname:newuser.fullname,
                _id:newuser._id,
                email:newuser.email
            }
        })
    } catch (error) {
      
        // console.log("Error: " + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const login = async(req, res) =>{
    try {
        const {email,password} = req.body
        const founduser=await User.findOne({email})
      
        const matchpassword=await bycrypt.compare(password,founduser.password) 
        if(!founduser || !matchpassword) 
            return res.status(404).json({message:'invalid username or password'}) 
        else
            return res.status(201).json({message:'login successful',
                user:{
                    fullname:founduser.fullname,
                    _id:founduser._id,
                    email:founduser.email

                }
            })
    } catch (error) {
        console.log('error', error.message)
        return res.status(500).json({message:'internal server error'})
    }
}