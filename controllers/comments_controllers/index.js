const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.post('/:id/comments', controller.addComment);

module.exports = router;
