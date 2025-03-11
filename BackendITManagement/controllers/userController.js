const user=require('../model/userModel')
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const createUser=async(req,res)=>{
    const{name,email,password,phone}=req.body;


try{
const userExist=await user.findOne({email})
    if(userExist){
        return res.status(400).json({message:"Email already exists" , error:"Email already Exists"})
    }
    else{
        let hashPassword= await bcrypt.hash(password,10)
        let response= await new user({name, email, password:hashPassword, phone})
        response=await response.save()
        res.status(201).json({message:"User Created Successfully",response})
    }
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Server Error",error:e})
    }
}
const login= async(req,res)=>{
    const{email,password}=req.body
    try{
        const isExist=await user.findOne({email})
        if(isExist){
            const isMatch= await bcrypt.compare(password,isExist.password)
            
            if(isMatch){
                const token= await jwt.sign({_id:isExist._id,role:isExist.role},"jskwjsijqsijqisqswqsiquwsiuqwnsiqwnisnqwisnq",{expiresIn:'1h'})
                res.json({message:"Login Success",user:isExist,token:token},)
            }
            else{
                res.status(400).json({message:"Invalid Password"})
            }
        }
        else{
            res.status(400).json({messgae:"Invalid Email or Password"})
        }
    }catch(err){
        console.log(first)
    }
   
}

module.exports= {createUser,login}

