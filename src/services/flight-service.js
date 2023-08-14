const {  AirplaneRepository,FlightRespository } = require('../repository/index');
const { compareTime  } = require('../utils/helper');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightrespository = new FlightRespository();//AirplaneRepository
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error:'arrival time cannot be less than departuretime'}
            }
            const airplane = await  this.airplaneRepository.getAirplane(data.airplaneId);  
            const flight = await this.flightrespository.createFlight({
                ...data,totalSeats:airplane.capacity
            });
            return flight;
            
        } catch (error) {
            console.log("error on service layer");
            throw{error};
        }
    }

    async getFlightData() {

    }
     
}
module.exports = FlightService;

/**
 * flightNumber,
 * airplaneId,
 * departureId,
 * arrivalId,
 * arrivaltime,
 * departureid,
 * price,
 * totalSeats -> airPlane
 */