const Comment = require('../../models/comment');

let controller = {};

// Adds a new comment
controller.addComment = (req, res) => {
  Comment
  .save(req.body.comment, req.params.id)
  .then(() => {
    res.redirect(`/posts/${req.params.id}`)
  })
};

module.exports = controller;
