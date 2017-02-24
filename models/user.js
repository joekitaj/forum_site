const db = require('../config/db');
const bcrypt = require('bcrypt')
const User = {};

User.findByUsername = (username) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1`,
    [username])
}

User.save = (user) => {
  user.password = bcrypt.hashSync(user.password, 10);

  return db.query(`
    INSERT INTO users
    (username, password)
    VALUES ($1, $2)`,
    [user.username, user.password]);
};

module.exports = User;
