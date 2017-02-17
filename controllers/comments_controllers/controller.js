const Comment = require('../../models/comment');

let controller = {};

controller.show = (req, res) => {
  Comment
  .findAll()
  .then((data) => {
    res.render('show', {comments: data});
  })
  .catch((err) => {
    console.log('Error:', err);
  });
};

controller.newComment = (req, res) => {
  res.render('comment')
}

controller.add = (req, res) => {
  Comment
  .save(req.body.comment)
  .then(() => {
    res.redirect('/posts')
  })
}

module.exports = controller;
