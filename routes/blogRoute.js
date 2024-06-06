const express = require('express')
const {getBlog, getBlogById, createBlog, updateBlog, deleteBlog} = require('../controllers/blogController');
const blogRoute = express.Router();

blogRoute.route('/blogs').get(getBlog);
blogRoute.route('/blogs/:id').get(getBlogById).put(updateBlog).delete(deleteBlog);
blogRoute.route('/createBlog').post(createBlog);

module.exports = blogRoute;

