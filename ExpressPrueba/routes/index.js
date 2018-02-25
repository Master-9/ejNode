'use strict';
var express = require('express');
var router = express.Router();
var controlMain = require('../controllers/main');

/* GET home page. */
router.get('/', controlMain.index);

module.exports = router;
