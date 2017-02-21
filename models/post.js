const db = require('../config/db');
const marked = require('marked');

const Post = {};

Post.findAll = () => {
  return db.query(`
    SELECT * FROM posts ORDER BY comments DESC, likes DESC;`)
};

Post.findById = (id) => {
  return db.query(`SELECT * FROM posts WHERE id = $1`, [id])
};

Post.save = (post, time, author) => {
  return db.query(`
    INSERT INTO posts
    (title,
    post_content,
    stamp,
    author)
    VALUES
    ($1, $2, $3, $4);`,
    [post.title, marked(post.post_content), time, author]
  )
};

Post.like = (id) => {
  return db.none(`
    UPDATE posts
    SET
    likes = likes + 1
    WHERE id = $1`,
    [id])
};

Post.comment = (id) => {
  return db.none(`
    UPDATE posts
    SET
    comments = comments + 1
    WHERE id = $1`,
    [id])
};

module.exports = Post;
