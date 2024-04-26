const Ninos = require('../models/ninosElaSchema');

const getNinoEla = async (req, res) => {

    try {
        const ninos = await Ninos.find()
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

const getNinoById = async (req, res) => {

    try {
        const { id } = req.params;
        const NinoById = await Ninos.findById(id);
        res.json({ success: true, message: 'producto solicitado', NinoById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createNinoEla = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const updateNinoEla = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Ninos.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteNinoEla = async (req, res) => {
    try {
        const { id } = req.params;
        await Ninos.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const gamePurchased = req.body.cartItems;

    try {
        gamePurchased.map(async (game) => {
            await Games.findByIdAndUpdate(game._id, { stock: game.stock - game.quantity })
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = { getNinoEla, getNinoById, createNinoEla, updateNinoEla, deleteNinoEla, reduceStock };