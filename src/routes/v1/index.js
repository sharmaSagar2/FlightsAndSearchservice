const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-contoller');

const router = express.Router();
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);
router.post('/citybulk',CityController.createbulk);

router.post('/flight',FlightController.create);
router.get('/flight',FlightController.getAll);
module.exports = router;