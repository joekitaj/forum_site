const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use(session({secret: 'Rangus'}));

router.use('/', require('./controllers/posts_controllers'));

module.exports = router;
