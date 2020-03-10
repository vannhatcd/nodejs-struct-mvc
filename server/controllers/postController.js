const mongoose = require("mongoose");
var Post = require("../models/post");

exports.getAllPost = function(req, res) {
  Post.find({}).exec(function(err, posts) {
    res.render("posts", {
      posts: posts
    });
  });
};
