const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.show);
router.get('/comment', controller.newComment);

router.post('/', controller.add);

module.exports = router;
