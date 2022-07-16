const Departement = require('../models/departement.model');
const { ObjectId } = require('bson');

const postDepartement = async(req, res, next) => {
    let payload = req.body;
    try {
        let departement = await Departement.create(payload)
        await departement.save();
        return res.status(200).json({ status: 200, data: departement, message: 'Succesfully Create Departement ' })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
};

const showDepartement= async(req, res, next) => {
    try {
        let departement = await Departement.findOne()
        return departement;
    } catch (e) {
        console.log(e.message)
        throw Error('Error departement')
    }
}

const getDepartement = async(req, res, next) => {
    try {
        let departement = await Departement.find()
        return res.status(200).json({ status: 200, data: departement })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const putDepartement = async(req, res, next) => {
    try {
        const id = req.params;
        const update = req.body;
        let departement = await Departement.updateOne({ _id: ObjectId(id) }, { $set: update } )
        return res.status(200).json({ status: 200, data: departement, message: 'Succsesfully Update Departement' })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
};

const deleteDepartement = async(req, res, next) => {
    try {
        const id = req.params;
        let departement = await Departement.deleteOne({ _id: ObjectId(id) });
        return res.status(200).json({ status:200, data: departement, message: 'Succsesfully Deleta Departement' })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
}

module.exports = {
    getDepartement,
    postDepartement,
    putDepartement,
    deleteDepartement,
    showDepartement
};