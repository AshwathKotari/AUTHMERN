import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import path from 'path';

dotenv.config();

const app = express();
app.use(express.json());

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname,'/cilent/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
});

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