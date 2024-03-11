const router = require('express').Router();
const withAuth = require('../utils/auth');
const {post, User, comment} = require('../models');

router.get('/', withAuth, async (req, res) => {
	try {
		const postRoute = await post.findAll({
			where: {userID: req.session.user_id}
		});
		const postArr = postRoute.map((post) => post.get());
		res.render('controlpanel', {
			controlpanel: true,
			postArr,
			loggedIn: req.session.logged_in
		});
	} catch (err) {
		console.log(err);
	}
});

router.get('/update/:id', withAuth, async (req, res) => {
	try {
		const postRoute = await post.findByPk(req.params.id);
		res.render('updatePost', {
			controlpanel: true,
			postRoute,
			loggedIn: req.session.logged_in
		});
		} catch (err) {
			console.log(err);
		}
	}
);

router.get('/createPost', withAuth, (req, res) => {
	try {
		res.render('createPost', {
			controlpanel: true,
			loggedIn: req.session.logged_in
		});
	} catch (err) {
		console.log(err);
	}
})

module.exports = router;