module.exports.blog = (req,res) => {
    res.render('blog');
}

module.exports.leftSidebar = (req,res) => {
    res.render('blog-left-sidebar');
}

module.exports.rightSidebar = (req,res) => {
    res.render('blog-right-sidebar');
}

module.exports.leftList = (req,res) => {
    res.render('blog-list-left-sidebar');
}

module.exports.rightList = (req,res) => {
    res.render('blog-list-right-sidebar');
}

module.exports.blogDetails = (req,res) => {
    res.render('blog-details');
}

module.exports.blogDetailsGallery = (req,res) => {
    res.render('blog-details-gallery');
}

module.exports.blogAudio = (req,res) => {
    res.render('blog-details-audio');
}

module.exports.blogVideo = (req,res) => {
    res.render('blog-details-video');
}

module.exports.blogLeftSidebar = (req,res) => {
    res.render('blog-details-left-sidebar');
}



