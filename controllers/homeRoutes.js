const router = require('express').Router();
const { User, post, comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const posts = await post.findAll({include: [User]});
        const allPosts = posts.map((post) => post.get());
        res.render('allposts', {allPosts, loggedIn: req.session.logged_in});
        } catch (err) {console.log(err);}
})

router.get('/post/:id', async (req, res) => {
    try {
        const posts = await post.findByPk(req.params.id, {include: [User]});
        const individualpost = posts.map((post) => post.get());
        res.render('individualpost', {individualpost, loggedIn: req.session.logged_in});
        } catch (err) {console.log(err);}
})

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
