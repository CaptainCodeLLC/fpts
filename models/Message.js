const mongoose = require('mongoose');
const { Schema } = mongoose;

//Message Schema

const MessageSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    emailAddress: {
        type:String,
        required:true
    },
    companyName: {
        type:String,
        required:false
    },
    subjectLine:{
        type:String,
        required: true
    },
    phoneNumber:{
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

module.exports = User = mongoose.model('message', MessageSchema);