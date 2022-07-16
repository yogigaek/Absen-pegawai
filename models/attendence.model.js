const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendenceSchema = new Schema({
    status : {
        type: String,
        required : [true, 'Field status harus ada'],
    }
})

const Attendence = mongoose.model('Attendence', attendenceSchema);
module.exports = Attendence;