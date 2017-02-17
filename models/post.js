const db = require('../config/db');

const Post = {};

Post.findAll = () => {
  return db.manyOrNone(`SELECT * FROM posts ORDER BY likes DESC`)
};

Post.findById = (id) => {
  return db.one(`SELECT * FROM posts WHERE id = $1`, [id])
};

Post.save = (post) => {
  return db.none(`
    INSERT INTO posts
    (title,
    content)
    VALUES
    ($1, $2);`,
    [post.title, post.content]
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

module.exports = Post;
