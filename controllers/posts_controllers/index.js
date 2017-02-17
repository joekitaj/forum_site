const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.put('/:id/like', controller.like);

router.get('/', controller.index);
router.get('/new', controller.newPost);
router.get('/:id', controller.show);


router.post('/', controller.addPost);
router.post('/:id', controller.addComment);

module.exports = router;
