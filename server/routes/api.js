const express = require("express");
const post = require("../controllers/postController");
const quiz = require("../controllers/quizController");
const question = require("../controllers/questionController");

const router = express.Router();

router.get("/posts", posts.showPost);
router.get("/crawl", posts.crawl);
router.get("/get-link", posts.getLink);

// api posts
router.get("/posts", post.showPost);
router.get("/post/:id", post.showPostDetail);

//api quiz
router.get("/quiz", quiz.showQuiz);

// question
router.get("/question", question.showQuestion);

module.exports = router;
