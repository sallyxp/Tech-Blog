//this index shows locations for the api 'model' routes
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);


module.exports = router;