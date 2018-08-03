const mongoose = require('mongoose');
const { Schema } = mongoose;

//User Schema

const UserSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName :{
        type:String,
        required:true
    },
    emailAddress: {
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:false
    },
    companyName: {
        type:String,
        required:false
    },
    date:{
        type:Date,
        default:Date.now
    }
}); 

mongoose.model('users', UserSchema);