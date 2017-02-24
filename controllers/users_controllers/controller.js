const User = require('../../models/user');
const bcrypt = require('bcrypt');

let controller = {};

controller.index = (req, res) => {
  res.render('users/login');
}

controller.saveUser = (req, res) => {
  User
  .save(req.body.user)
  .then(() => {
    req.session.isAuthenticated = true;
    req.session.username = req.body.user.username;
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
};

controller.process_login = (req, res) => {
  User
  .findByUsername(req.body.user.username)
  .then((user) => {
    if (user) {
      // Here if email is found
      const isAuthed = bcrypt.compareSync(req.body.user.password, user.password);

      if (isAuthed) {
        // Here if email is found & pw matches
        req.session.isAuthenticated = true;
        req.session.username = req.body.user.username;
        res.redirect('/posts');
      } else {
        // If email is found, but pw is wrong
        res.redirect('/users/login');
      }
    } else {
      res.redirect('/users/login')
    }
  })
};

// ends the session on clicking logout
controller.logout = (req,res) => {
  req.session.destroy((err) => {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/posts');
    }
  });
};

module.exports = controller;
