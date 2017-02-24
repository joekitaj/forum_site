# Forum Site Read Me

I've built an example forum site that could be used as a stand-alone app, or implemented as the forum section of a larger site / web app.

The site uses Node.js & Express on the back-end. It utilizes a Ruby-esque MVC framework. Bootstrap was used for a majority of the front-end. jQuery used in certain instances as well.

Users are initially directed to the main posts section. They may login at the top, or explore posts. Users that do not have existing accounts may create them.

If a user attempts to create a new post, and has not logged in, they will be directed to the login page. The same goes for liking and commenting. Logged in users can post, like, and comment. This is all handled using `express-session.`

Logging out terminates the session and brings one back to the login page.

All user input is automatically converted to Markdown using the `marked` package. Other dependencies can be found in `package.json.`

Edit and delete functionality was omitted in order to create an open, clean, and simple design, however, I am planning on implementing this soon. Users should be able to only edit and delete their own posts/comments.

Hosted on heroku via the link above. Should you wish to clone/download/modify, be sure to install ALL dependecies independently, as they have been git ignored. Site runs on `localhost:3000` for testing purposes.
