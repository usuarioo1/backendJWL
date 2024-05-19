const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({

    id: {type: String, require: true},
    nombre: {type: String, require: true},
    codigo:{type: String, require:true},
    usuario:{type: String, require:true}

})
const Cart = mongoose.model('cart', cartSchema);
module.exports =Cart