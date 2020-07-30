
//shop
module.exports.shop = (req,res) => {
    res.render('shop-list');
};

module.exports.shop_2 = (req,res) => {
res.render('shop-grid');
};


module.exports.shop_3 = (req,res) => {
    res.render('shop-grid-left-sidebar');
};


module.exports.shop_4 = (req,res) => {
    res.render('shop-grid-right-sidebar');
};

module.exports.shop_5 = (req,res) => {
    res.render('shop-list-left-sidebar');
};

module.exports.shop_6 = (req,res) => {
    res.render('shop-list-right-sidebar');
};

//products
module.exports.product = (req,res) => {
    res.render('product-details');
};

module.exports.product_1 = (req,res) => {
    res.render('product-details-affiliate');
};

module.exports.product_2 = (req,res) => {
    res.render('product-details-group');
};

module.exports.product_3 = (req,res) => {
    res.render('product-details-variable');
};

module.exports.product_4 = (req,res) => {
    res.render('product-details-left-thumbnail');
};

module.exports.product_5 = (req,res) => {
    res.render('product-details-right-thumbnail');
};

module.exports.product_6 = (req,res) => {
    res.render('product-details-left-gallery');
};

module.exports.product_7 = (req,res) => {
    res.render('product-details-right-gallery');
};



