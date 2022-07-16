const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaveSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'Field name harus ada'],
        minlength : 3,
        maxlength: 50
    },
    alasan: {
        type: String,
        required: [true, 'Field alasan harus ada'],
        minlength : 3,
        maxlength: 150
    },
    departement: {
        type: Schema.Types.ObjectId,
        ref: 'Departement'
    },
}, {
    timestamps : true
});

const Leave = mongoose.model('Leave', leaveSchema);
module.exports = Leave;