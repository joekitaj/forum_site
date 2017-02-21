const db = require('../config/db');
const User = {};

User.save = (user) => {
  return db.query (`
    INSERT INTO users
    (username)
    VALUES
    ($1)`,
    [user.username]
  )
}

module.exports = User;
