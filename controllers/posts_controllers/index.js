const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.put('/:id/like', controller.like);

router.get('/', controller.login);

router.post('/login', controller.saveUser);

router.get('/posts', controller.index);
router.get('/posts/new', controller.newPost);
router.get('/posts/:id', controller.show);

router.post('/posts/new', controller.addPost);
router.post('/:id', controller.addComment);



module.exports = router;
