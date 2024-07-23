const mongoose = require('mongoose')

const religiosSchema = new mongoose.Schema({
    nombre: {type: String, require: true},
    categoria: {type:String, require:true},
    descripcion: {type:String, require:true},
    precio: {type: Number, require: true, min: 0},
    codigo:{type: String, require:true},
    alto:{type:Number},
    ancho:{type:Number},
    diametro:{type:Number},
    peso:{type: Number},
    color:{type:String},
    stock:{type:Number, default:0, require: true, min: 0},
    img: {type: String, require:true}
    
})

const Religioso = mongoose.model('religioso', religiosSchema);

module.exports = Religioso;



