const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        type:Number,
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

module.exports = Users = mongoose.model('user', UserSchema);