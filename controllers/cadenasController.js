const Cadenas = require('../models/cadenasSchema');

const getCadenas = async (req, res) => {

    try {
        const cadenas = await Cadenas.find() 
        res.json({
            success: true,
            message: 'acá está la lista de cadenas',
            info: cadenas
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getCadenasById = async (req, res) => {

    try { 
        const { id } = req.params;
        const cadenasById = await Cadenas.findById(id);
        res.json({ success: true, message: 'producto solicitado', cadenasById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createCadenas= async (req, res) => {
    try {
        const newProduct = new Cadenas(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const updateCadenas = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Cadenas.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteCadena = async (req, res) => {
    try {
        const { id } = req.params;
        await Cadenas.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const cadenasPurchased = req.body.cartItems;

    try {
        cadenasPurchased.map(async (caden) => {
            await Cadenas.findByIdAndUpdate(caden._id, { stock: caden.stock - caden.quantity }) //REVISAR
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = {getCadenas, getCadenasById, updateCadenas, createCadenas, deleteCadena, reduceStock};