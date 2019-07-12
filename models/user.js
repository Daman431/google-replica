const mongoose = require('mongoose')



const User = mongoose.model('Users',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength: 7
    },
    email:{
        type:String,
        trim:true,
        required:true,
        lowercase:true
    }
})

module.exports = User