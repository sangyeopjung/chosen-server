var express = require('express');
var router = express.Router();
var Verify = require('./verify');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chosen' });
});

module.exports = router;
