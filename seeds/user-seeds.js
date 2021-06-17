const { User } = require('../models');

const userData = 

[
  {
     "name": "Albert_Einstein",
     "email": "bertie@princeton.com",
      "password": "apple"
  },
  {
    "name": "richard_feynman", //id 2
    "email": "rich@princeton.com",
    "password": "peach"
  },
  {
    "name": "marie_curie", //id 3
      "email": "marie@paris.com",
      "password": "xray1"
  },
  {
      "name": "stan_lee", //id 4
      "email": "donotcall@yahoo.com",
      "password": "comic"
  }
]
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;