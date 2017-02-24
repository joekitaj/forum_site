let controller = {};

controller.index = (req, res) => {
  res.render('users/login');
}

controller.saveUser = (req, res) => {
    User
    .save(req.body.user)
    .then(() => {
        res.redirect('/dashboard');
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

module.exports = controller;
