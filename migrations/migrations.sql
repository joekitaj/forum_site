DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR (255) NOT NULL,
  post_content TEXT NOT NULL,
  author VARCHAR(255),
  stamp VARCHAR(255),
  likes INTEGER DEFAULT 0,
  comments INTEGER DEFAULT 0
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  post_id INTEGER REFERENCES posts(id),
  comment_content TEXT NOT NULL,
  author VARCHAR(255),
  stamp VARCHAR(255),
  likes INTEGER DEFAULT 0
);
