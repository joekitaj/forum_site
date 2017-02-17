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

Comment.save = (comment, id) => {
  return db.query(`
    INSERT INTO comments
    (comment_content, post_id)
    VALUES
    ($1, $2)`,
    [comment.comment_content, id]
  );
};

module.exports = Comment;
