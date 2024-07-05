const Review = require('../models/reviewSchema')

const getReview = async(req,res) => {

    try {
        const reviews = await Review.find()
        res.json({
            success:true,
            message:'lista de reviews',
            info: reviews
        })
    } catch (error) {
        res.json({ success: false, message: 'info no encontrada' });
        console.error(error)
    }
}

const postReview = async(req,res) => {

    try {
        const newReview = new Review(req.body)
        await newReview.save();
        res.status(201).json({ succes: true, message: "review enviada", info: newReview });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const deleteReview = async(req,res) => {

    try {
        const {id} = req.params;
        await Review.findByIdAndDelete(id)
        res.json({succees:true, message: 'review eliminada'})
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar la review' });
    }
}

module.exports = {getReview, postReview, deleteReview};