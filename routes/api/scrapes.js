const router = require('express').Router();
const scrapesController = require('../../controllers/scrapesController');
const scrapeController = require('../../controllers/scrapeController');

// =============================================================
// Matches with '/api/scrapes'
router.route('/')
  .get(scrapesController.scrapeAll);


// Matches with '/api/scrapestest'
router.route('/test')
  .get(scrapeController.scrapeAll);

// =============================================================
// Export

module.exports = router;