const Banner = require('../models/bannerSchemma')

const getBanner = async(req,res) => {
    try {
        const baner = await Banner.find()
        res.json({
            success:true,
            message: 'listado de banners',
            info:baner
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const postBanner = async(req,res) => {
    try {
        const newBanner = new Banner(req.body);
        await newBanner.save()
        res.status(201).json({ succes: true, message: "banner enviado", info: newBanner });

    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const deleteBanner = async(req,res) => {
    try {
        const {id} = req.params;
        await Banner.findByIdAndDelete(id)
        res.json({succees:true, message: 'banner eliminado'})

    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
    }
}

module.exports = {getBanner, postBanner, deleteBanner};