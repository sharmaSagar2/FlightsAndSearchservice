const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-contoller');
const AirportController = require('../../controllers/airport-controller');
const { FlightMiddlewares } = require('../../middlewares/index');

const router = express.Router();
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);
router.post('/citybulk',CityController.createbulk);

router.post('/flight',FlightMiddlewares.validateCreateFlight,FlightController.create);
router.get('/flight',FlightController.getAll);
router.post('/airports',AirportController.create);
module.exports = router;