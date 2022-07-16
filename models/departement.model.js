const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DepartementSchema = new Schema({
    status : {
        type: String
    },
    role: {
		type: String,
		enum: ['user', 'admin'],
		default: 'admin'
	},
},{
    timestamps : true
})

const Departement = mongoose.model('Departement', DepartementSchema);
module.exports = Departement;