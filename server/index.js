import express from 'express'
import {connection} from './db/connection.js'
import productRouter from './routes/product.js'
import userRouter from './routes/userRoutes.js';
import cors from 'cors'

const app=express()

const URL='https://starsports-cap10.onrender.com';

connection
.then(()=>{
    console.log("Connected")
})
.catch((e)=>{
    console.log(e)
})

app.use(express.json())
app.use(cors())
app.use(`${URL}/product`, productRouter);
app.use(`${URL}/user`, userRouter);

app.listen(5000,()=>{
    console.log("Server is running")
})