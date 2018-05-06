const router = require('express').Router();
const episodeController = require('../../controllers/episodeController');

// =============================================================
// Matches with '/api/episode'
router.route('/')
  .get(episodeController.findAll)
  .post(episodeController.create);

// =============================================================
// Matches with '/api/episode/:id'
router
  .route('/:id')
  .get(episodeController.findById)
  .put(episodeController.update)
  .delete(episodeController.remove);

// =============================================================
// Matches with '/api/episode/eid/:id'
router
  .route('/eid/:id')
  .get(episodeController.findByEid);

module.exports = router;
