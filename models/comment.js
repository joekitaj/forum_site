const db = require('../config/db');

const Comments = {};

Comments.findAll = () => {
  return db.manyOrNone(`SELECT * FROM comments`)
};

Comments.save = (comment, id) => {
  return db.query(`
    INSERT INTO comments
    (comment_content, post_id)
    VALUES
    ($1, $2)`,
    [comment.comment_content, id]
  );
};

module.exports = Comments;
