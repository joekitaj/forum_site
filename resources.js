const express = require('express');

const router = express.Router();

router.use('/posts', require('./controllers/posts_controllers'));


module.exports = router;
