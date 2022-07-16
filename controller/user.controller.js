const User = require('../models/user.model');
const { showAttendence } = require('./attendence.controller');
const { ObjectId } = require("bson");

const postUser = async(req, res, next) => {
    let payload = req.body;

	if(payload.attendence) {
		let attendence = await showAttendence({ name: {$regex: payload.attendence, $options: 'i'} })
		if(attendence) {
			payload = {...payload, attendence: attendence._id}
		} else {
			delete payload.attendence
		}
	}

    try {
        let user = await User.create(payload)
        return res.status(200).json({ status: 200, data: user, message: "Succesfully Create User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const getUser = async(req, res, next) => {
    let { name = '', attendence = '' } = req.query
	let criteria = {}

	if (name.length) {
		criteria = {
			...criteria,
			name: {$regex: name, $options: 'i'}
		}
	}

	if (attendence.length) {
		attendence = await showAttendence({name :{$regex: attendence, $options: 'i'}})

		if (attendence) {
			criteria = {...criteria, attendence: attendence._id}
		}
	}

	try {
		let user  = await User.find(criteria).populate('attendence')
		return res.status(200).json({ status: 200, data: user, message: "Succesfully User Retrieved" })
	} catch(e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

const putUser = async (req,res, next) => {
    let payload = req.body
	let id = req.params

	if(payload.attendence) {
		let attendence = await showAttendence({ name: {$regex: payload.attendence, $options: 'i'} })
		if(attendence) {
			payload = {...payload, attendence: attendence._id}
		} else {
			delete payload.attendence
		}
	}

    try {
        let user = await User.updateOne({ _id: ObjectId(id) }, { $set: payload })
        return res.status(200).json({ status: 200, data: user, message: "Succesfully Update User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const id = req.params;
        let user = await User.deleteOne({ _id: ObjectId(id) })
        return res.status(200).json({ status: 200, data: user, message: "Succesfully Delete User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports = {
    postUser,
    getUser,
    putUser,
    deleteUser  
}