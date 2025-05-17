const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const schema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true
    },
    email:{
        type : String,
        required : true,
        unique : true,
        lower: true,
        trim : true
    },
    password:{
        type : String,
        required : true
    },
    ac_type:{
        type : String,
        required : true,
        enum:['saving','current'],
        default : 'saving'
    }

},{
    timestamps : true
})

schema.pre('save',async function(next){
    const user = this;
    if(user.isModified('password')){
        this.password = await bcryptjs.hash(user.password, 10);
    }
    next();
})

const model = mongoose.model('user',schema)
module.exports = model