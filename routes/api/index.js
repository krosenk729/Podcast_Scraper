const router = require('express').Router();
const podcastRoutes = require('./podcast');
const scrapesRoutes = require('./scrapes');

// =============================================================
// Podcast Link CRUD routes
router.use('/podcast', podcastRoutes);


// =============================================================
// Podcast Scrape routes
router.use('/scrapes', scrapesRoutes);

router.get('/test', function(req, res) {
	res.send('nope');
});

// =============================================================
// Export
module.exports = router;