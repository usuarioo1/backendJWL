const  ArosPiedrasNaturales = require('../models/arosPiedrasNaturalesSchema')

const getArosPiedraNatural = async (req, res) => {

    try {
        const arosPiedraNatural = await ArosPiedrasNaturales.find()
        res.json({
            success: true,
            message: 'acá está la lista de aros piedras  naturales',
            info: arosPiedraNatural
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getAroPiedraNaturalById = async (req, res) => {

    try {  
        const { id } = req.params;
        const aroPiedraNaturalById = await Aros.findById(id);
        res.json({ success: true, message: 'producto solicitado', aroPiedraNaturalById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createAroPiedraNatual= async (req, res) => {
    try {
        const newProduct = new ArosPiedrasNaturales(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const updateAroPiedraNatural = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await ArosPiedrasNaturales.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteAroPiedraNatural = async (req, res) => {
    try {
        const { id } = req.params;
        await ArosPiedrasNaturales.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const arosPiedraNaturalPurchased = req.body.cartItems;

    try {
        arosPiedraNaturalPurchased.map(async (arospiedranatural) => {
            await ArosPiedrasNaturales.findByIdAndUpdate(arospiedranatural._id, { stock: arospiedranatural.stock - arospiedranatural.quantity }) //REVISAR
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = {getArosPiedraNatural, getAroPiedraNaturalById, createAroPiedraNatual, deleteAroPiedraNatural, reduceStock, updateAroPiedraNatural};