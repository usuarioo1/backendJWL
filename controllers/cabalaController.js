const Cabala = require('../models/cabalaSchema.js')

const getCabala = async (req, res) => {

    try {
        const cabala = await Cabala.find()
        res.json({
            success: true,
            message: 'acá está la lista de cabalas',
            info: cabala
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getCabalaById = async (req, res) => {

    try {
        const { id } = req.params;
        const cabalaById = await Cabala.findById(id);
        res.json({ success: true, message: 'producto solicitado', cabalaById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createCabala = async (req, res) => {
    try {
        const newProduct = new Cabala(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
        console.error(error)
    }
}

const updateCabala = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Cabala.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteCabala = async (req, res) => {
    try {
        const { id } = req.params;
        await Cabala.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const cabalaPurchased = req.body.cartItems;

    try {
        cabalaPurchased.map(async (cabala) => {
            await Cabala.findByIdAndUpdate(cabala._id, { stock: cabala.stock - cabala.quantity })
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = { getCabala, getCabalaById, createCabala, updateCabala, deleteCabala, reduceStock };