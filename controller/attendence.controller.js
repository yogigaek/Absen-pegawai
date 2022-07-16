const Attendence = require('../models/attendence.model');
const { ObjectId } = require('bson');

const postAttendence = async(req, res, next) => {
    let payload = req.body
    try {
        let attendence = await Attendence.create(payload);
        await attendence.save();
        return res.status(200).json({ status: 200, data: attendence, message: 'Succesfully Create Attendence' });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const getAttendence = async(req, res, next) => {
    try {
        let attendence = await Attendence.find();
        return res.status(200).json({ status: 200, data: attendence });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const showAttendence = async(req, res, next) => {
    try {
        let attendence = await Attendence.findOne()
        return attendence;
    } catch (e) {
        console.log(e.message)
        throw Error('Error attendence')
    }
}

const putAttendence = async(req, res, next) => {
    const id = req.params;
    let update = req.body;
    try {
        let attendence = await Attendence.updateOne({ _id: ObjectId(id) }, { $set: update });
        return res.status(200).json({ status: 200, data: attendence, message: 'Succesfully Update Attendence' });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const deleteAttendence = async(req, res, next) => {
    const id = req.body;
    try {
        let attendence = await Attendence.deleteOne(id);
        return res.status(200).json({ status: 200, data: attendence, message: 'Succesfully Delete Attendence' });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports = {
    postAttendence,
    putAttendence,
    getAttendence,
    deleteAttendence,
    showAttendence
}

