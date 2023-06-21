import mongoose from 'mongoose'

const users=mongoose.Schema(
    {
        name: {
            type:String,
            required:true
        },
        dob:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            required:true
        },
        usertype: {
            type: String,
            enum: ['admin', 'user'], 
            default: 'user',
          },
    }
)

const usersModel=mongoose.model('user',users)

export {usersModel}