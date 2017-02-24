const express = require('express');
const router = express.Router();

const controller = require('./controller')

router.get('/login', controller.index);
router.get('/new', controller.new);
router.get('/logout', controller.logout)

router.post('/', controller.saveUser);
router.post('/login', controller.process_login)

module.exports = router;
