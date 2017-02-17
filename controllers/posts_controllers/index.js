const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.index);
router.get('/new', controller.new);

router.post('/', controller.add)

module.exports = router;
