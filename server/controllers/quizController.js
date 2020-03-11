const mongoose = require("mongoose");
const Quiz = require('../models/quiz');

exports.showQuiz = (req, res, next) => {
    Quiz.aggregate([{ $sample: { size: 20} }]).limit(20)
    .exec(
        function (err, result) {
            res.send(result);
    })
};