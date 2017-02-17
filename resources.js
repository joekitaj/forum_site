const express = require('express');

const router = express.Router();

router.use('/posts', require('./controllers/posts_controllers'));

router.use('/posts/:id', require('./controllers/comments_controllers'));


module.exports = router;
