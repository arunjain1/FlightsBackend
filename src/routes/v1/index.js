const express = require('express');
const cityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");
const {FlightMiddlewares} = require("../../middlewares/index");
const router = express.Router();

router.post('/city',cityController.create);
router.get('/city/:id',cityController.get);
router.get('/city',cityController.getAll);
router.delete('/city/:id',cityController.destroy);
router.patch('/city/:id',cityController.update);


router.post('/flights',FlightMiddlewares.validateCreateFlight, flightController.create);
router.get('/flight',flightController.get);
router.get('/flights',flightController.getAll);
router.patch('/flights/:id',flightController.patch);


router.post('/airports',AirportController.create);


module.exports = router;