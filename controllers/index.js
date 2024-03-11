const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const controlPanelRoutes = require('./controlpanel-routes');
const allPostsRoutes = require('./allPostsRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/controlpanel', controlPanelRoutes);
router.use('./allposts', allPostsRoutes);

module.exports = router;