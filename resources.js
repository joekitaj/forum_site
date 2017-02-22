const express = require('express');
const router = express.Router();
const session = require('express-session');

// Required by sessions
router.use(session({secret: 'Rangus'}));

router.use('/', require('./controllers/posts_controllers'));

module.exports = router;
