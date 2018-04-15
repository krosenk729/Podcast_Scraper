const router = require('express').Router();
const podcastController = require('../../controllers/podcastController');

// =============================================================
// Matches with '/api/podcast'
router.route('/')
  .get(podcastController.findAll)
  .post(podcastController.create);

// =============================================================
// Matches with '/api/podcast/:id'
router
  .route('/:id')
  .get(podcastController.findById)
  .put(podcastController.update)
  .delete(podcastController.remove);

module.exports = router;
