import mongoose from 'mongoose'

const product=mongoose.Schema(
    {
        name: {
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        desc:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true
        }
    }
)

const productModel=mongoose.model('product',product)

export {productModel}