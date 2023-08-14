const { Flights } = require('../models/index');
class FlightRespository {
    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
            
        } catch (error) {
            console.log("error on repository layer");
            throw {error};   
        }


    }
}
module.exports = FlightRespository;