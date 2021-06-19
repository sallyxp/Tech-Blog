//post routes including with auth for post editing
const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//create a new post
router.post('/', withAuth, async (req, res) => {
  console.log("Hit create new post");
  try {
    const newPost = await Post.create({
    
      user_id: req.session.user_id,
      title: req.body.title,
      description: req.body.description
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});



router.delete('/:id', withAuth, async (req, res) => {
  console.log("this is the info delete");
  console.log(post);
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.log("in line 37");
    res.status(500).json(err);
  }
});

// Comment post
router.post('/:id', withAuth, async (req, res) => {
  console.log(req.body);
  console.log(req.session.user_id);
  try {
    const newComment = await Comment.create({
      comment_text: req.body.comment_text,
      post_id: parseInt(req.body.post_id),
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;