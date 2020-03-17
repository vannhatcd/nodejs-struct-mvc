const express = require("express");
const posts = require("../controllers/postController");

const router = express.Router();

router.get("/posts", posts.showPost);
router.get("/crawl", posts.crawl);
router.get("/get-link", posts.getLink);

module.exports = router;
