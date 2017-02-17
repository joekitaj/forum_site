const db = require('../config/db');

const c = {};

c.findAll = () => {
  return db.manyOrNone(`SELECT * FROM comments`)
};

c.save = (comment) => {
  return db.none(`
    INSERT INTO comments
    (comment_content)
    VALUES
    ($1);`,
    [comment.comment_content])
};

module.exports = c;
