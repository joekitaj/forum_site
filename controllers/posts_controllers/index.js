const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.put('/posts/:id/like', controller.like);

router.get('/', controller.login);
router.get('/posts', controller.index);
router.get('/posts/new', controller.newPost);
router.get('/posts/:id', controller.show);

router.post('/login', controller.saveUser);
router.post('/posts/new', controller.addPost);
router.post('/posts/:id/comment', controller.addComment);

module.exports = router;
