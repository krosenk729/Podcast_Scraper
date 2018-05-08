const router = require('express').Router();
const scrapeController = require('../../controllers/scrapeController');

// =============================================================
// Matches with '/api/scrapes'
router.route('/')
  .get(scrapeController.scrapeAll);

// =============================================================
// Export

module.exports = router;