//this is the index which gives the routes locations
const router = require('express').Router();

//const apiRoutes = require('./api');
const homeRoutes = require('./user-routes.js');
//const postRoutes = require('./post-routes');
//const commentRoutes = require('./comment-routes');



router.use('/users', userRoutes);
//router.use('/users', postRoutes);
//router.use('/users', commentRoutes);

module.exports = router;