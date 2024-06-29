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
        const {id} = param;
        const dataClientById = await DataForm.findById(id);
        res.status(200).json({ success: false, message: 'info cliente', dataClientById });
        
    } catch (error) {
        res.status(500).json({ success: false, message: 'info no encontrada' })
    }
}