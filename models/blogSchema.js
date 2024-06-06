const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
        titulo: {type: String, require:true},
        img:{type:String, require:true},
        contenido:{type: String, require:true}

    }
)

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog;