'use strict';
var express = require('express');
var router = express.Router();
var controlMain = require('../controllers/main');
var p = 6;

/* GET nueva. */
router.get('/', controlMain.do);

module.exports = router;