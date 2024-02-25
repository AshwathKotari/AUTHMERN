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