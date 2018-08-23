const mongoose = require('mongoose');
const { Schema } = mongoose;

//Message Schema

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    emailAddress: {
        type:String,
        required:true
    },
    subjectLine:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:String,
        required:false
    },
    companyName: {
        type:String,
        required:false
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}); 

module.exports = User = mongoose.model('message', UserSchema);