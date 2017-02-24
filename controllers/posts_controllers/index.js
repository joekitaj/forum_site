const express = require('express');
const router = express.Router();

// See controller.js for each function
// Routes were simplified for cleanliness

const controller = require('./controller');

router.put('/:id/like', controller.like);

router.get('/', controller.index);
router.get('/new', controller.newPost);
router.get('/:id', controller.show);

// router.get('/logout', controller.logout);

router.post('/new', controller.addPost);
router.post('/:id/comment', controller.addComment);

module.exports = router;
