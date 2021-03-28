const { Post } = require('../models');

const postData = [
    {//1
        title: "Perpetual Motion Machine runs out of steam",
        post_content: "We obey the Laws of Physics in this Household says Homer Simpson",
        user_id: 2
    },
    {//2
        title: "if it's green and wiggles ....",
        post_content: "Got no nose? How doit's Biology.  If it stinks, it's Chemistry.",
        user_id: 2
    },
    {//3
        title: "Why does a burger have less energy than a steak?",
        post_content: "Because it's in its ground state",
        user_id: 3
    },
    {//3
        title: "Why can't you trust an atom?",
        post_content: "They make up everything",
        user_id: 4
    },
      {//4
        title: "A neutron walks into a bar ..",
        post_content: "and asks 'how much?",
        user_id: 1
    }


]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;