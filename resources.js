const express = require('express');
const router = express.Router();

router.use('/posts', require('./controllers/posts_controllers'));

router.use('/users', require('./controllers/users_controllers'));

router.get('/', (req, res) => {
  res.redirect('/posts')
});

module.exports = router;
