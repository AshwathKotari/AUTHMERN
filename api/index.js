import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(express.json());

import userRoutes from  './routes/user.route.js';
import authRoutes from './routes/auth.route.js';


mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to database!")
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log('server listening on port 3000')
})


app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error!";
    return res.status(statusCode).json({
        success : false,
        message,
         statusCode,
    });
})