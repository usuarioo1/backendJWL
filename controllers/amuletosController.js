const Amuletos = require('../models/amuletosSchema');

// hacer usuarios --> asociar a sku --> carrito

const getAmuleto = async (req, res) => {

    try {
        const amuletos = await Amuletos.find()
        res.json({
            success: true,
            message: 'acá está la lista de Amuletos',
            info: amuletos
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getAmuletoById = async (req, res) => {

    try {
        const { id } = req.params;
        const amuletoById = await Amuletos.findById(id);
        res.json({ success: true, message: 'producto solicitado', amuletoById })

    } catch (error) {
        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createAmuleto= async (req, res) => {
    try {
        const newProduct = new Amuletos(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const updateAmuleto = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Amuletos.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteAmuleto = async (req, res) => {
    try {
        const { id } = req.params;
        await Amuletos.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const amuletoPurchased = req.body.cartItems;

    try {
        amuletoPurchased.map(async (amuleto) => {
            await Amuletos.findByIdAndUpdate(amuleto._id, { stock: amuleto.stock - amuleto.quantity }) //REVISAR
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = {getAmuleto, getAmuletoById, createAmuleto, deleteAmuleto, updateAmuleto, reduceStock}