const express = require('express');
const router = express.Router();

const controller = require('./controller')

router.get('/login', controller.index);
router.get('/new', controller.new)

router.post('/', controller.saveUser);

module.exports = router;
