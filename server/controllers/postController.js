const mongoose = require("mongoose");
var Post = require("../models/post");

exports.showPost = (req, res, next) => {
  Post.find() //fetches all the posts
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.showPostDetail = function (req, res) {
  Post.findById(req.params.id, function (err, result) {
    if (err) return next(err);
    res.send(result);
  })
};
