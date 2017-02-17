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
  });
};

controller.show = (req, res) => {
  Post
  .findById(req.params.id)
  .then((data) => {
    res.render('show', {
      post: data
    });
  })
  .catch((err) => {
    console.log('ERROR:', err);
  });
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

module.exports = controller;
