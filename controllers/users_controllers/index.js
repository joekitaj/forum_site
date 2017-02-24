const express = require('express');
const router = express.Router();

const controller = require('./controller')

router.get('/login', controller.index)

module.exports = router;
