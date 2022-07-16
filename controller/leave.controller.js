const Leave = require('../models/leave.models');
const { showDepartement } = require('../controller/departement.controller')
const { ObjectId } = require('bson');

const postLeave = async(req, res, next) => {
    let payload = req.body;

    if(payload.departement) {
		let departement = await showDepartement({ name: {$regex: payload.departement, $options: 'i'} })
		if(departement) {
			payload = {...payload, departement: departement._id}
		} else {
			delete payload.departement
		}
	}

    try {
        let leave = await Leave.create(payload)
        return res.status(200).json({ status: 200, data: leave, message: 'Succesfully Create Leave Permission ' })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
};

const getLeave = async(req, res, next) => {
    let { status = '', departement = '' } = req.query
	let criteria = {}

	if (status.length) {
		criteria = {
			...criteria,
			status: {$regex: status, $options: 'i'}
		}
	}

	if (departement.length) {
		departement = await showDepartement({status :{$regex: departement, $options: 'i'}})

		if (departement) {
			criteria = {...criteria, departement: departement._id}
		}
	}

    try {
        let leave = await Leave.find().populate('departement')
        return res.status(200).json({ status: 200, data: leave })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const showLeave= async(req, res, next) => {
    try {
        let leave = await Leave.findOne()
        return leave;
    } catch (e) {
        console.log(e.message)
        throw Error('Error leave')
    }
}

const putLeave = async(req, res, next) => {
    let payload = req.body
	let id = req.params

	if(payload.departement) {
		let departement = await showDepartement({ status: {$regex: payload.departement, $options: 'i'} })
		if(departement) {
			payload = {...payload, departement: departement._id}
		} else {
			delete payload.departement
		}
	}

    try {
        let leave = await Leave.updateOne({ _id: ObjectId(id) }, { $set: payload } )
        return res.status(200).json({ status: 200, data: leave, message: 'Succsesfully Update Leave Permission' })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
};

const deleteLeave = async(req, res, next) => {
    try {
        const id = req.params;
        let leave = await Leave.deleteOne({ _id: ObjectId(id) });
        return res.status(200).json({ status:200, data: leave, message: 'Succsesfully Deleta Leave Permission' })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
}

module.exports = {
    postLeave,
    getLeave,
    putLeave,
    deleteLeave,
    showLeave
};