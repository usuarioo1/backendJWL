const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    name: {type: String,
        require:true
    },
    review: {type:String, require:true},

})

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;