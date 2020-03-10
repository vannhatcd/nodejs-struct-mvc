const express = require("express");
const posts = require("../controllers/postController");

const router = express.Router();

router.get("/posts", posts.getAllPost);

module.exports = router;
