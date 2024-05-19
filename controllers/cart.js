const Cart = require("../models/cartSchema");
const createCart= async (req, res) => {
    try {
        const newCart = new Cart(req.body);
        await newCart.save();

        res.status(201).json({ succes: true, message: "cart save", info: newCart });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

module.exports = {createCart}