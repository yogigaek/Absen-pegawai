const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportMonth = new Schema({
    name : {
        type: String,
        required: [true, 'Field name harus ada'],
        minlength: 3,
        maxlength: 50
    },
    idCard: String,
    job: String,
    comeLate: Number,
    alpa: Number,
    leavePermission: Number
}, {
    timestamps : true
});

const Report = mongoose.model('Report', reportMonth );
module.exports = Report;