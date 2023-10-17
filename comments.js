// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');
var User = require('../models/user');

// Create comment
router.post('/create', function(req, res, next) {
    var comment = new Comment({
        content: req.body.content,

