var express = require('express');
var router = express.Router();
// packages needed for uploading images
var multer = require('multer');
var upload = multer({dest: './uploads'});

var User = require('../models/user');

router.get('/register', function(req, res, next) {
  res.render('register',{
    title: 'Register'
  });
});
router.get('/login', function(req, res, next) {
  res.render('login',{
    title: 'Login'
  });
});

module.exports = router;
