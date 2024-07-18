const DataForm = require('../models/dataFormSchema');

const getDataForm = async(req, res) => {

    try {
        const dataClient = await DataForm.find()
        res.json({
            success: true,
            message: 'lista de datos de clientes',
            info: dataClient
        })
    } catch (error) {
        res.status(200).json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getDataFormById = async(req,res) => {

    try {
        const {id} = req.params;
        const dataClientById = await DataForm.findById(id);
        res.status(200).json({ success: false, message: 'info cliente', dataClientById });
        
    } catch (error) {
        res.status(500).json({ success: false, message: 'info no encontrada' })
    }
}

const createDataForm= async (req, res) => {
    try {
        const newDataForm = new DataForm(req.body);
        await newDataForm.save();
        res.status(201).json({ success: true, message: "info enviada", info: newDataForm });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const editDataForm = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {getDataForm, getDataFormById, createDataForm};