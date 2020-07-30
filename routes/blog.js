const express = require('express');
const router = express.Router();
const blog = require('../Controller/blog');

/* GET home page. */
router.get('/blog', blog.blog);
router.get('/blog-left-sidebar', blog.leftSidebar);
router.get('/blog-right-sidebar', blog.rightSidebar);
router.get('/blog-list-left-sidebar', blog.leftList);
router.get('/blog-list-right-sidebar', blog.rightList);
router.get('/blog-details', blog.blogDetails);
router.get('/blog-details-gallery', blog.blogDetailsGallery);
router.get('/blog-details-audio', blog.blogAudio);
router.get('/blog-details-video', blog.blogVideo);
router.get('/blog-details-left-sidebar', blog.blogLeftSidebar);



module.exports = router;
