const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
   name:{
        type:String,
        require:true,
   },
   email:{
        type:String,
        require:true,
   },
   password:{
        type:String,
        require:true,
   },
   passwordHash:{
        type:String,
   }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;