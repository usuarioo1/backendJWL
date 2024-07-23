const Pulseras = require('../models/pulserasSchema');

const getPulseras = async (req, res) => {

    try {
        const pulseras = await Pulseras.find()
        res.json({
            success: true,
            message: 'acá está la lista de Anillos',
            info: pulseras
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getPulseraById = async (req, res) => {

    try {
        const { id } = req.params;
        const pulseraById = await Pulseras.findById(id);
        res.json({ success: true, message: 'producto solicitado', pulseraById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createPulsera= async (req, res) => {
    try {
        const newProduct = new Pulseras(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const updatePulsera = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Pulseras.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deletePulsera = async (req, res) => {
    try {
        const { id } = req.params;
        await Anillos.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const anilloPurchased = req.body.cartItems;

    try {
        anilloPurchased.map(async (anillo) => {
            await Pulseras.findByIdAndUpdate(anillo._id, { stock: anillo.stock - anillo.quantity }) //REVISAR
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = {getPulseras, getPulseraById, createPulsera, deletePulsera, updatePulsera, reduceStock}