const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
   name:{
        type:String,
        required:true,
   },
   email:{
        type:String,
        unique:true,
        required:true,
   },
   password:{
        type:String,
        required:true,
   },
   passwordHash:{
        type:String,
   }
});

UserSchema.pre('save', async function(){
   if(this.password)
        this.passwordHash = await bcrypt.hash(this.password, 8)
        this.password = undefined;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;