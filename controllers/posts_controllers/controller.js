const Post = require('../../models/post');
const Comment = require('../../models/comment');
const async = require('async');



let controller = {};

controller.index = (req, res) => {
  Post
  .findAll()
  .then((data) => {
    res.render('index', {posts: data});
  })
  .catch((err) => {
    console.log('Error:',err);
  });
};

controller.show = (req, res) => {
  Post
  .findById(req.params.id)
  .then((data) => {
    res.render('show', {post: data})
  })
}

controller.new = (req, res) => {
  res.render('new');
};

controller.add = (req, res) => {
  Post
  .save(req.body.post)
  .then(() => {
    res.redirect('/posts')
  })
  .catch((err) => {
    console.log('Error:',err);
  });
};

controller.like = (req, res) => {
  Post
  .like(req.params.id)
  .then(() => {
    if (req.query.show) {
      res.redirect(`/posts/${req.params.id}`)
    } else {
      res.redirect('/posts')
    }
  })
  .catch((err) => {
    console.log('ERROR:', err);
  });
}

controller.comment = (req, res) => {
  Post
  .findById(req.params.id)
  .then((data) => {
    res.render('comment', {
      post: data
    });
  })
  .catch((err) => {
    console.log('ERROR:', err);
  });
}

module.exports = controller;
