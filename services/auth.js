let AuthService = {};

AuthService.restrict = (req, res, next) => {
  if(req.session.isAuthenticated) {
    next();
  } else {
    res.redirect('/users/login');
  };
};

module.exports = AuthService;
