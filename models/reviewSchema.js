const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    title: {type: String,
        require:true
    },
    content: {type:String, require:true},
    author: {type:String, require:true}

})

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;