const mongoose = require("mongoose");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const Crawler = require("crawler");

var Post = require("../models/post");
const Link = require("../models/link");

exports.showPost = (req, res, next) => {
  Post.find() //fetches all the posts
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.crawl = (res, req, next) => {
  var c = new Crawler({
    maxConnections: 100,
    jQuery: jsdom,
    // This will be called for each crawled page
    callback: function(error, res, done) {
      if (error) {
        console.log(error);
      } else {
        const { window } = new JSDOM(res.body);
        var content = window.document.body.querySelector(
          ".article-content__body"
        ).innerHTML;

        console.log(content);
      }
      done();
    }
  });

  // Queue just one URL, with default callback
  c.queue(
    "https://viblo.asia/p/linux-lam-quen-voi-useradd-trong-linux-djeZ1npglWz"
  );
};

exports.getLink = (req, res) => {
  var c = new Crawler({
    maxConnections: 1000,
    callback: function(error, res, done) {
      if (error) {
        console.log(error);
      } else {
        const $ = res.$;
        var content = $(
          ".container .post-feed-item .post-title--inline .word-break a"
        ).each((i, e) => {
          Link.init();
          const link = new Link({
            title: $(e).text(),
            url: $(e).attr("href")
          });

          link.save().then(data => {
            console.log("save data: ", data);
          });
        });
      }
      done();
    }
  });
  c.queue("https://viblo.asia/newest");
};

exports.showPostDetail = function(req, res) {
  Post.findById(req.params.id, function(err, result) {
    if (err) return next(err);
    res.send(result);
  });
};
