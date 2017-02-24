const User = require('../../models/user')

let controller = {};

controller.index = (req, res) => {
  res.render('users/login');
}

controller.saveUser = (req, res) => {
  User
  .save(req.body.user)
  .then(() => {
      res.redirect('/posts');
  })
  .catch((err) => {
      res
      .status(400)
      .json(err);
  });
}

controller.new = (req, res) => {
  res.render('users/new')
}

module.exports = controller;
