const router = require('express').Router();
const scrapeController = require('../../controllers/scrapeController');

// =============================================================
// Matches with '/api/scrapes'
router.route('/')
  .get(scrapeController.scrapeAll);

// =============================================================
// Matches with '/api/scrapes/search/:link'
router
  .route('/search/:link')
  .get(scrapeController.scrapeOne);

// =============================================================
// Export

module.exports = router;