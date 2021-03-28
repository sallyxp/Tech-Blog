const { User } = require('../models');

const userData = 

[
  {
     "username": "Albert_Einstein",
     "email": "bertie@princeton.com",
      "password": "apple"
  },
  {
    "username": "richard_feynman", //id 2
    "email": "rich@princeton.com",
    "password": "peach"
  },
  {
    "username": "marie_curie", //id 3
      "email": "marie@paris.com",
      "password": "xray1"
  },
  {
      "username": "stan_lee", //id 4
      "email": "donotcall@yahoo.com",
      "password": "comic"
  }
]
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;