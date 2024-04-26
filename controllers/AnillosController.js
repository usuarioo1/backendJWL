const Anillos = require('../models/anillosSchema');

const getAnillo = async (req, res) => {

    try {
        const anillos = await Anillos.find()
        res.json({
            success: true,
            message: 'acá está la lista de Niños Ela',
            info: ninos
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getAnilloById = async (req, res) => {

    try {
        const { id } = req.params;
        const anilloById = await Anillos.findById(id);
        res.json({ success: true, message: 'producto solicitado', anilloById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createAnillo= async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const updateAnillo = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Anillos.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteAnillo = async (req, res) => {
    try {
        const { id } = req.params;
        await Anillos.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const gamePurchased = req.body.cartItems;

    try {
        gamePurchased.map(async (game) => {
            await Anillos.findByIdAndUpdate(game._id, { stock: game.stock - game.quantity }) //REVISAR
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = {getAnillo, getAnilloById, createAnillo, deleteAnillo, updateAnillo, reduceStock}