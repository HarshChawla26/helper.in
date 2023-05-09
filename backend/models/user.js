const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name     :  String,
    email    :  String,
    pwd      :  String,
    phone    :  String,
    address  :  String,
    services :  Array,
    cart     :  Array,
    role     :  String
})

userSchema.pre('save',async function(next){
    if(this.isModified('pwd')){
        this.pwd = await bcrypt.hash(this.pwd,10);
    }
    next()
})

const user = mongoose.model('user',userSchema)
module.exports = user;