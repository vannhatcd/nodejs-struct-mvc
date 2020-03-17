var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

var linkSchema = mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  url: {
    required: true,
    type: String
  }
});

var Link = mongoose.model("links", linkSchema);

module.exports = Link;
