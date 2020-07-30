const express = require('express');
const router = express.Router();
const contact = require('../Controller/contact');

/* GET home page. */
router.get('/contact', contact.contact);

module.exports = router;
