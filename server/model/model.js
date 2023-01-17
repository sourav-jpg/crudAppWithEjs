const mongoose = require(   'mongoose');
const Schema = mongoose.Schema;

const  UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String
    },
    status:{
        type:String
    }
   
   
});

const UserDb = mongoose.model('userDb',UserSchema);
module.exports =  UserDb;