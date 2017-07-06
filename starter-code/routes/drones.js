/*jshint esversion: 6 */

const express = require('express');

const router = express.Router();
// require the Drone model here
const Drone = require("../models/drone");

router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (error, drones) => {
    if (error) {
      next(error);
      return;
    } else {
      res.render("drones/index", { drones });
    }
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
