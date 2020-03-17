const mongoose = require("mongoose");
var Question = require("../models/question");

exports.showQuestion = (req, res, next) => {
    Question.find().sort({ _id: -1 }).limit(20)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};
