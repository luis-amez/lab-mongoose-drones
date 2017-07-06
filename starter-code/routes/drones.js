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


router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render("drones/new");
});

router.post('/', (req, res, next) => {
  // Iteration #3
  const droneInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };
  const newDrone = new Drone(droneInfo);
  newDrone.save(error => {
    if (error) {
      next(error);
      return;
    } else {
      res.redirect("/drones");
    }
  });
});

module.exports = router;
