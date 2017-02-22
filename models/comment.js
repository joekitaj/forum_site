const db = require('../config/db');
// for converting to markdown
const marked = require('marked');

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

Comment.save = (comment, id, time, author) => {
  return db.query(`
    INSERT INTO comments
    (comment_content, post_id, stamp, author)
    VALUES
    ($1, $2, $3, $4)`,
    [marked(comment.comment_content), id, time, author]
  );
};

module.exports = Comment;
