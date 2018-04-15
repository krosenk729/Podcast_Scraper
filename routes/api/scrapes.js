const router = require('express').Router();
const scrapesController = require('../../controllers/scrapesController');

// =============================================================
// Matches with '/api/scrapes'
router.route('/')
  .get(scrapesController.scrapeAll);


// =============================================================
// Export

module.exports = router;