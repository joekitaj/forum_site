const Post = require('../../models/post');

let controller = {};

controller.index = (req, res) => {
  Post
  .findAll()
  .then((data) => {
    res.render('index', {posts: data});
  })
  .catch((err) => {
    console.log('Error:',err);
  })
}

controller.new = (req, res) => {
  res.render('new');
}

controller.add = (req, res) => {
  Post
  .save(req.body.post)
  .then(() => {
    res.redirect('/posts')
  })
}

module.exports = controller;
