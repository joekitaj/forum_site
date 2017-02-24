const express = require('express');
const router = express.Router();

router.use('/posts', require('./controllers/posts_controllers'));

router.use('/users', require('./controllers/users_controllers'));

module.exports = router;
