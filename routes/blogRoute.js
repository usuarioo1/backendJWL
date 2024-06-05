const express = require('express')
const {getBlog, getBlogById, createBlog, updateBlog, deleteBlog} = require('../controllers/blogController');
const blogRoute = express.Router();

blogRoute.route('/blogs').get(getBlog);


