const express = require('express');
const router = express.Router();
const pages = require('../Controller/pages');

/* GET home page. */
router.get('/cart', pages.cart);
router.get('/wishlist', pages.wishlist);
router.get('/checkout', pages.checkout);
router.get('/compare', pages.compare);
router.get('/login-register', pages.login);
router.get('/my-account', pages.account);
router.get('/order-complete', pages.ocomplete);
router.get('/faq', pages.faq);
router.get('/contact-2', pages.contact);

module.exports = router;
