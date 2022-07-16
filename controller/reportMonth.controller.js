const Report = require('../models/reportMonth.model');
const { ObjectId } = require('bson');

const postReport = async(req, res, next) => {
    let payload = req.body;
    try {
        let report = await Report.create(payload)
        await report.save();
        return res.status(200).json({ status: 200, data: report, message: 'Succesfully Create Report Month ' })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
};

const getReport = async(req, res, next) => {
    try {
        let report = await Report.find()
        return res.status(200).json({ status: 200, data: report })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const putReport = async(req, res, next) => {
    try {
        const id = req.params;
        const update = req.body;
        let report = await Report.updateOne({ _id: ObjectId(id) }, { $set: update } )
        return res.status(200).json({ status: 200, data: report, message: 'Succsesfully Update Report Month' })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
};

const deleteReport = async(req, res, next) => {
    try {
        const id = req.params;
        let report = await Report.deleteOne({ _id: ObjectId(id) });
        return res.status(200).json({ status:200, data: report, message: 'Succsesfully Delete Report Month' })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
}

module.exports = {
    postReport,
    getReport,
    putReport,
    deleteReport
};