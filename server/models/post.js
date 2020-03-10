const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
});

var Post = mongoose.model("posts", postSchema);

module.exports = Post;
