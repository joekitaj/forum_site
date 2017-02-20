const db = require('../config/db');

const Comment = {};

Comment.findAll = () => {
  return db.query(`SELECT * FROM comments`)
};

Comment.findAllByPostId = (id) => {
  return db.query(`
    SELECT * FROM comments
    WHERE post_id = $1
    `,[id])
}

Comment.save = (comment, id, time) => {
  return db.query(`
    INSERT INTO comments
    (comment_content, post_id, stamp)
    VALUES
    ($1, $2, $3)`,
    [comment.comment_content, id, time]
  );
};

module.exports = Comment;
