const Blog = require('../models/blogSchema');

const getBlog = async(req, res) => {

    try {
        const blogs = await Blog.find()
        res.json({
            success:true,
            message:'Entradas del Blog',
            info: blogs
        })
    } catch (error) {
        
    }
}

const getBlogById = async (req, res) => {

    try {
        const { id } = req.params;
        const blogByid = await Blog.findById(id);
        res.json({ success: true, message: 'articulo solicitado', blogByid })

    } catch (error) {

        res.status(500).json({ success: false, message: 'articulo no encontrado' })

    }

}

const createBlog= async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        await newBlog.save();
        res.status(201).json({ succes: true, message: "articulo creado", info: newBlog });
    } catch (error) {
        res.status(500).json({ succees: false, messagee: error.message });
    }
}

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ success: true, message: 'articulo actualizado', info: updatedBlog });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar articulo' });
    }
}