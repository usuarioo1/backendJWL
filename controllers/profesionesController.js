const Profesiones = require('../models/profesionesSchema');

const getProfeisones = async (req, res) => {

    try {
        const profesiones = await Profesiones.find()
        res.json({
            success: true,
            message: 'acá está la lista de profesiones',
            info: profesiones
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getProfesionById = async (req, res) => {

    try { 
        const { id } = req.params;
        const profesionById = await Profesiones.findById(id);
        res.json({ success: true, message: 'producto solicitado', profesionById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createProfesion= async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const updateProfesion = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Profesiones.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteProfesion = async (req, res) => {
    try {
        const { id } = req.params;
        await Profesiones.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const profPurchased = req.body.cartItems;

    try {
        profPurchased.map(async (prof) => {
            await Profesiones.findByIdAndUpdate(prof._id, { stock: prof.stock - prof.quantity }) //REVISAR
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = {getProfeisones, getProfesionById, updateProfesion, createProfesion, deleteProfesion, reduceStock};