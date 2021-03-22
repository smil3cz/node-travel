const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router.route('/tour-stats').get(tourController.getTourStats); // 1ST AGGREGATION PIPELINE
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlans); // 2ND AGGREGATION PIPELINE
// ALIAS OF URL - example
router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
