const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema({
    img: {type:String, require: true}
})

const Banner = mongoose.model('banner', bannerSchema);

module.exports = Banner; 