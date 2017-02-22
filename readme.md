# Forum Site Read Me

I've built an example forum site that could be used as a stand-alone app, or implemented as the forum section of a larger site / web app.

The site uses Node.js & Express on the back-end. It utilizes a Ruby-esque MVC framework. Bootstrap was used for a majority of the front-end. jQuery used in certain instances as well.

The site features a pseudo-login page, in which users must input a username. The purpose of this is to attribute comments and posts to an author. Users can post, like, and comment. Logging out terminates the session and brings one back to the login page.

All user input is automatically converted to Markdown using the `marked` package. Other dependencies can be found in `package.json.`

Edit and delete functionality was omitted in order to create an open, clean, and simple design, however, I am planning on implementing this soon. Users should be able to only edit and delete their own posts/comments.

Hosted on heroku via the link above. Should you wish to clone/download/modify, be sure to install ALL dependecies independently, as they have been git ignored. Site runs on `localhost:3000` for testing purposes.
