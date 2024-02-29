import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import pkg from 'jsonwebtoken';
const { Jwt } = pkg;

export const signUp =async (req,res,next)=>{
    const {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword});

   try {
    await newUser.save();
   res.status(201).json({message:"user created successfully!"})
   } catch (error) {
    next(error);
   }

}

export const signIn = async(req,res,next)=>{
    const {email,password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404,'Invalid credentials'))
        const validPassword = bcryptjs.compareSync(password,validUser.password)
        if (!validPassword) return next(errorHandler(404,'wrong Password!'))
        const token = Jwt.sign({id: validUser._id},process.env.JWT_SECRET);
    res.cookie('access_token',token).status(200).json(validUser);
    }
    catch(error){
        next(error)
    }
}

// export default signIn;


export default signUp;