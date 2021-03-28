const router = require('express').Router();
const User = require('../models/User');

// route to get all users
router.get('/', async (req, res) => {
    const userData = await User.findAll().catch((err) => { 
        res.json(err);
      });
        const users = userData.map((user) => user.get({ plain: true }));
        res.render('all', { users });
      });
  
  // route to get one dish
  router.get('/dish/:id', async (req, res) => {
    try{ 
        const dishData = await Dish.findByPk(req.params.id);
        if(!dishData) {
            res.status(404).json({message: 'No dish with this id!'});
            return;
        }
        const dish = dishData.get({ plain: true });
        res.render('dish', dish);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

module.exports = router;
