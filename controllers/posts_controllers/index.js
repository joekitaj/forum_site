const express = require('express');
const router = express.Router();

// See controller.js for each function
// Routes were simplified for cleanliness

const controller = require('./controller');
const AuthService = require('../../services/auth');

router.put('/:id/like', AuthService.restrict, controller.like);

router.get('/', controller.index);
router.get(
  '/new',
  AuthService.restrict,
  controller.newPost);
router.get('/:id', controller.show);

// router.get('/logout', controller.logout);

router.post('/new', controller.addPost);
router.post('/:id/comment', AuthService.restrict, controller.addComment);

module.exports = router;
