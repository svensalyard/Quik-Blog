const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { post, comment } = require('../../models');

router.post('/', withAuth, async (req, res) => {
	const bodyReq = req.body;
	try {
		const createPost = await post.create({body, userId: req.session.user_id});
		res.json(createPost);
	} catch (err) {console.log(err);}
});

router.post('/comment', withAuth, async (req, res) => {
	try {
		const postComment = await comment.create({...req.body, userId: req.session.user_id});
		res.json(postComment)
	} catch (err) { console.log(err); }
})

router.put('/:id', withAuth, async (req, res) => {
	try {const postdata = await post.update(req.body, {
		where: { id: req.params.id}
	}) } catch (err) {console.log(err);}
});

router.delete('/:id', withAuth, async (req, res) => {
	try {
		const postdata = post.destroy({id: req.params.id})
		res.status(200).end();
	} catch (err) {console.log(err);}
});

module.exports = router;