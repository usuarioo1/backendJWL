const mongoose = require('mongoose')

const dataFormSchema = new mongoose.Schema({

    name: {type:String, require:true},
    adress: {type:String, require: true},
    mail: {type:String, require:true},
    phone: {type:Number, require:true},
    region: {type:String, require: true},
    comuna: {type: String, require: true},
    departamento: {type:Number, require: true},
    referencias: {type:String}
})

const Dataform = mongoose.model('dataform', dataFormSchema);

module.exports = Dataform;