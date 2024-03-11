const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const controlPanelRoutes = require('./controlpanel-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/controlpanel', controlPanelRoutes);

module.exports = router;