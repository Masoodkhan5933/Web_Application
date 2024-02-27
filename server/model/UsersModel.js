import mongoose from 'mongoose'
import validator from 'validator'
const users=mongoose.Schema(
    {
        name: {
            type:String,
            required:[true,"Please enter you name"]
        },
        dob:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:[true,"please enter your email"],
            unique:true,
            lowercase: true,
            validate: [validator.isEmail,"Please enter the valid Email address"]
        },
        password:{
            type:String,
            required:[true,"Please provide a password"],
            minlength : 8
        },
        role:{
            type:String,
            required:true
        },
        usertype: {
            type: String,
            enum: ['admin', 'user','seller'], 
            default: 'user',
          },
    }
)

const usersModel=mongoose.model('user',users)

export {usersModel}