const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(
  path.join(__dirname, 'public')
));

app.use(session({
  secret: 'rangus',
  resave: false,
  saveUninitialized: true
}));

app.listen(PORT);

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));

app.use(require('./resources'));
