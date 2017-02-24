const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/posts')
})

router.use('/posts', require('./controllers/posts_controllers'));

router.use('/users', require('./controllers/users_controllers'));

module.exports = router;
