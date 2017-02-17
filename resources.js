const express = require('express');

const router = express.Router();

router.get('/posts', './controllers/posts_controllers')

module.exports = router;
