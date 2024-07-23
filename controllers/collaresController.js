const Collares = require('../models/collaresSchema');

const getCollares = async (req, res) => {

    try {
        const collares = await Collares.find()
        res.json({
            success: true,
            message: 'acá está la lista de Anillos',
            info: collares
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getCollarById = async (req, res) => {

    try {
        const { id } = req.params;
        const collarById = await Collares.findById(id);
        res.json({ success: true, message: 'producto solicitado', collarById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createCollar= async (req, res) => {
    try {
        const newProduct = new Collares(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const updateCollar = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Collares.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteCollar = async (req, res) => {
    try {
        const { id } = req.params;
        await Collares.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const collaresPurchased = req.body.cartItems;

    try {
        collaresPurchased.map(async (collares) => {
            await Collares.findByIdAndUpdate(collares._id, { stock: collares.stock - collares.quantity }) //REVISAR
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = {getCollares, getCollarById, createCollar, deleteCollar, updateCollar, reduceStock}