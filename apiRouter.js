// Imports
var express      = require('express');
var usersCtrl    = require('./routes/usersCtrl');
var postsCtrl = require('./routes/postsCtrl');
var likesCtrl    = require('./routes/likesCtrl');

// Router
exports.router = (function() {
  var apiRouter = express.Router();

  // Users routes
  apiRouter.route('/users/register/').post(usersCtrl.register);
  apiRouter.route('/users/login/').post(usersCtrl.login);
  apiRouter.route('/users/me/').get(usersCtrl.getUserProfile);
  apiRouter.route('/users/me/').put(usersCtrl.updateUserProfile);

  // posts routes
  apiRouter.route('/posts/new/').post(postsCtrl.createpost);
  apiRouter.route('/posts/').get(postsCtrl.listposts);

  // Likes
  apiRouter.route('/posts/:postId/vote/like').post(likesCtrl.likePost);
  apiRouter.route('/posts/:postId/vote/dislike').post(likesCtrl.dislikePost);

  return apiRouter;
})();