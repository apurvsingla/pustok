const express = require('express');
const router = express.Router();
const shop = require('../Controller/shop');

/* GET home page. */
router.get('/shop-list', shop.shop);
router.get('/shop-grid', shop.shop_2);
router.get('/shop-grid-left-sidebar', shop.shop_3);
router.get('/shop-grid-right-sidebar', shop.shop_4);
router.get('/product-details', shop.product);
router.get('/product-details-affiliate', shop.product_1);
router.get('/product-details-group', shop.product_2);
router.get('/product-details-variable', shop.product_3);
router.get('/shop-list-left-sidebar', shop.shop_5);
router.get('/shop-list-right-sidebar', shop.shop_6);
router.get('/product-details-left-thumbnail', shop.product_4);
router.get('/product-details-right-thumbnail', shop.product_5);
router.get('/product-details-left-gallery', shop.product_6);
router.get('/product-details-right-gallery', shop.product_7);

module.exports = router;
