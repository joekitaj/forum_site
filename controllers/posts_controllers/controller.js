// Require each model
const Post = require('../../models/post');
const Comment = require('../../models/comment');
const User = require('../../models/user');
// Allows for multiple functions to run, asynchronously
const async = require('async');
// Logs date & current time
const timestamp = require('time-stamp');

let controller = {};

// Show the home page with all posts
controller.index = (req, res) => {
  Post
  .findAll()
  .then((data) => {
    res.render('index', {posts: data});
  })
  .catch((err) => {
    console.log('Error:',err);
  });
};

// Select a single post and show it and its comments
controller.show = (req, res) => {
  let post_data;
  let comment_data;

  // grabs the specific post
  const getPosts = (cb) => {
    Post
    .findById(req.params.id)
    .then((posts) => {
      post_data = posts;
      cb();
    });
  }

  // grabs all comments
  const getComments = (cb) => {
    Comment
    .findAllByPostId(req.params.id)
    .then((comments) => {
      comment_data = comments;
      cb();
    });
  }
  // run each function aysnchronously
  async.parallel([getPosts, getComments], () => {
    res.render('show', {
      post: post_data[0],
      comments: comment_data
    });
  });
}

// Adds a new comment
controller.addComment = (req, res) => {
  Comment
  .save(req.body.comment, req.params.id, timestamp('MM/DD/YYYY'), name)
  .then(() => {
    res.redirect(`/posts/${req.params.id}`)
  })
  Post
  .comment(req.params.id)
  .then(() => {
    console.log('Done')
  })
};

// Brings up the new post screen
controller.newPost = (req, res) => {
  res.render('new');
};

// Adds the new post
controller.addPost = (req, res) => {
  Post
  .save(req.body.post, timestamp('MM/DD/YYYY'), name)
  .then(() => {
    res.redirect('/posts')
  })
  .catch((err) => {
    console.log('Error:',err);
  });
};

// Like functionality
controller.like = (req, res) => {
  Post
  .like(req.params.id)
  .then(() => {
    if (req.query.show) {
      res.redirect(`/posts/${req.params.id}`)
    } else {
      res.redirect('/posts')
    }
  })
  .catch((err) => {
    console.log('ERROR:', err);
  });
}

module.exports = controller;
