const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const quizSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: {
    type: String,
    required: true
  },
  correct_answer: {
    type: String,
    required: true
  },
  answers: {
    type: Array,
    required: true
  },
  explain: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

var Quiz = mongoose.model("quizs", quizSchema);

module.exports = Quiz;