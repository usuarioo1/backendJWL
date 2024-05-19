const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({

    items: { type: Array, default: [] },
    usuario:{type: String, require:true}

})
const Cart = mongoose.model('cart', cartSchema);
module.exports =Cart