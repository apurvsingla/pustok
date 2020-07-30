const express = require('express');
const router = express.Router();
const index = require('../Controller/index');

/* GET home page. */
router.get('/', index.index);

router.get('/index-2', index.index_2);
router.get('/index-3', index.index_3);
router.get('/index-4', index.index_4);
router.get('/index-5', index.index_5);

router.use('/', require('./shop'));
router.use('/', require('./pages'));
router.use('/', require('./blog'));
router.use('/', require('./contact'));
module.exports = router;
