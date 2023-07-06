import express from 'express'
import {connection} from './db/connection.js'
import productRouter from './routes/product.js'
import userRouter from './routes/userRoutes.js';
import cors from 'cors'

const app=express()



connection
.then(()=>{
    console.log("Connected")
})
.catch((e)=>{
    console.log(e)
})

app.use(express.json())
app.use(cors())
app.use('/product',productRouter)
app.use('/user',userRouter);

app.listen(5000,()=>{
    console.log("Server is running")
})