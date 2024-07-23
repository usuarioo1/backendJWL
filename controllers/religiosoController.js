const Religioso = require('../models/religiosoSchema');

const getReligioso = async (req, res) => {

    try {
        const religioso = await Religioso.find()
        res.json({
            success: true,
            message: 'acá está la lista de Religiosos',
            info: religioso
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const getReligiosoById = async (req, res) => {

    try {
        const { id } = req.params;
        const getReligiosoById = await Religioso.findById(id);
        res.json({ success: true, message: 'producto solicitado', getReligiosoById })

    } catch (error) {

        res.status(500).json({ success: false, message: 'producto no encontrado' })

    }

}

const createReligioso = async (req, res) => {
    try {
        const newProduct = new Religiosoa(req.body);
        await newProduct.save();
        res.status(201).json({ succes: true, message: "producto creado", info: newProduct });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
        console.error(error)
    }
}

const updateReligioso = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Religioso.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'Producto actualizado', info: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
    }
}

const deleteReligioso = async (req, res) => {
    try {
        const { id } = req.params;
        await Religioso.findByIdAndDelete(id);
        res.json({ success: true, message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

const reduceStock = async (req, res) => {
    const religiosoPurchased = req.body.cartItems;

    try {
        religiosoPurchased.map(async (religioso) => {
            await Religioso.findByIdAndUpdate(religioso._id, { stock: religioso.stock - religioso.quantity })
        })
        res.status(201).json({ success: true, message: 'se ha reducido el stock' })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            succees: false, message: error.message
        })
    }
}

module.exports = { getReligioso, getReligiosoById, createReligioso, updateReligioso, deleteReligioso, reduceStock };