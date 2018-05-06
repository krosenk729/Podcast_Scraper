const router = require('express').Router();
const podcastRoutes = require('./podcasts');
const episodeRoutes = require('./episodes');
const scrapesRoutes = require('./scrapes');

// =============================================================
// Mounting Routes

router.use('/podcast', podcastRoutes);

router.use('/episode', episodeRoutes);

router.use('/scrapes', scrapesRoutes);

router.get('/test', function(req, res) {
	res.send('nope');
});

// =============================================================
// Export
module.exports = router;