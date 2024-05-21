const Madres = require('../models/madresYninosSchema');

const getMadre = async (req, res) => {

    try {
        const madresYninos = await Madres.find()
        res.json({
            success: true,
            message: 'acá está la lista de Madres y ninños',
            info: madresYninos
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getMadreById = async (req, res) => {

    try {  
        const { id } = req.params;
        const madreById = await Madres.findById(id);
        res.json({ success: true, message: 'producto solicitado', madreById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createMadre= async (req, res) => {
    try {
        const newProduct = new Madres(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const updateMadre = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Madres.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteMadre = async (req, res) => {
    try {
        const { id } = req.params;
        await Madres.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const madresPurchased = req.body.cartItems;

    try {
        madresPurchased.map(async (madres) => {
            await Madres.findByIdAndUpdate(madres._id, { stock: madres.stock - madres.quantity }) //REVISAR
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = {getMadre, getMadreById, createMadre, updateMadre, deleteMadre, reduceStock};