const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required : [true, 'Field name harus ada'],
        mixlength: 3,
        maxlength: 50
    },
    idCard : String,
    job : String,
    attendence : {
        type: Schema.Types.ObjectId,
        ref: 'Attendence'
    },
},{
    timestamps : true
})

const User = mongoose.model('User', userSchema);
module.exports = User;