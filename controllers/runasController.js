const Runas = require('../models/runasSchema');

const getRunas = async (req, res) => {

    try {
        const runas = await Runas.find()
        res.json({
            success: true,
            message: 'acá está la lista de Runas',
            info: runas
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getRunaById = async (req, res) => {

    try { 
        const { id } = req.params;
        const runaById = await Runas.findById(id);
        res.json({ success: true, message: 'producto solicitado', runaById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createRuna= async (req, res) => {
    try {
        const newProduct = new Runas(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const updateRuna = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Runas.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteRuna = async (req, res) => {
    try {
        const { id } = req.params;
        await Runas.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const runasPurchased = req.body.cartItems;

    try {
        runasPurchased.map(async (runas) => {
            await Runas.findByIdAndUpdate(runas._id, { stock: runas.stock - runas.quantity }) //REVISAR
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = {getRunas, getRunaById, createRuna, updateRuna, deleteRuna, reduceStock};