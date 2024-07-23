const MadreNaturaleza = require('../models/madreNaturalezaSchema');

const getMadreNaturaleza = async (req, res) => {

    try {
        const madreNaturaleza = await MadreNaturaleza.find()
        res.json({
            success: true,
            message: 'acá está la lista de Anillos',
            info: madreNaturaleza
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getMadreNaturalezaById = async (req, res) => {

    try {
        const { id } = req.params;
        const madreNaturalezaById = await MadreNaturaleza.findById(id);
        res.json({ success: true, message: 'producto solicitado', madreNaturalezaById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createMadreNaturaleza = async (req, res) => {
    try {
        const newProduct = new MadreNaturaleza(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const updateMadreNaturaleza = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await MadreNaturaleza.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteMadreNaturaleza = async (req, res) => {
    try {
        const { id } = req.params;
        await MadreNaturaleza.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const madreNaturalezaPurchased = req.body.cartItems;

    try {
        madreNaturalezaPurchased.map(async (madrenaturaleza) => {
            await MadreNaturaleza.findByIdAndUpdate(madrenaturaleza._id, { stock: madrenaturaleza.stock - madrenaturaleza.quantity }) //REVISAR
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = {getMadreNaturaleza, getMadreNaturalezaById, createMadreNaturaleza, deleteMadreNaturaleza, updateMadreNaturaleza, reduceStock}