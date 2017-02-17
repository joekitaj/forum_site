const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.put('/:id/like', controller.like);

router.get('/', controller.index);
router.get('/new', controller.new);
router.get('/:id', controller.show);

router.post('/', controller.add)

module.exports = router;
