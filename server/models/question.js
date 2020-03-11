const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const questionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});

var Question = mongoose.model("questions", questionSchema);

module.exports = Question;