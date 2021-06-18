
const { Post } = require('../models');

const postData = [
    {//1
        title: "Perpetual Motion Machine runs out of steam",
        post_content: "We obey the Laws of Physics in this Household says Homer Simpson",
        name: "Albert_Einstein",
        user_id: 1
    },
    {//2
        title: "if it's green and wiggles ....",
        post_content: "it's Biology.  If it stinks, it's Chemistry.",
        name: "richard_feynman",
        user_id: 2
    },
    {//3
        title: "Why does a burger have less energy than a steak?",
        post_content: "Because it's in its ground state",
        user_id: 3,
        name: "marie_curie"
    },
    {//4
        title: "Why can't you trust an atom?",
        post_content: "They make up everything",
        user_id: 4,
        name: "stan_lee"
    },
      {//5
        title: "A neutron walks into a bar ..",
        post_content: "and asks 'how much?",
        user_id: 4,
        name: "stan_lee"
    }


]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;