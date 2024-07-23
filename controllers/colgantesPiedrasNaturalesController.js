const ColgantesPiedrasNaturales = require('../models/colgantesPiedrasNaturalesSchema');

const getColgantesPiedrasNaturales = async (req, res) => {

    try {
        const colgantesPiedrasNatural = await ColgantesPiedrasNaturales.find()
        res.json({
            success: true,
            message: 'acá está la lista de Niños Ela',
            info: colgantesPiedrasNatural
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getColgantePiedraNaturalById = async (req, res) => {

    try {
        const { id } = req.params;
        const colgantePiedraNaturalById = await ColgantesPiedrasNaturales.findById(id);
        res.json({ success: true, message: 'producto solicitado', colgantePiedraNaturalById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createColgantePiedraNatural = async (req, res) => {
    try {
        const newProduct = new ColgantesPiedrasNaturales(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
        console.error(error)
    }
}

const updateColgantePiedraNatural = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await ColgantesPiedrasNaturales.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteColgantePiedraNatural = async (req, res) => {
    try {
        const { id } = req.params;
        await ColgantesPiedrasNaturales.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const colgantesPiedrasNaturalesPurchased = req.body.cartItems;

    try {
        colgantesPiedrasNaturalesPurchased.map(async (colgantespiedrasnaturales) => {
            await ColgantesPiedrasNaturales.findByIdAndUpdate(colgantespiedrasnaturales._id, { stock: colgantespiedrasnaturales.stock - colgantespiedrasnaturales.quantity })
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = { getColgantesPiedrasNaturales, getColgantePiedraNaturalById, createColgantePiedraNatural, updateColgantePiedraNatural, deleteColgantePiedraNatural, reduceStock };