// const {  AirplaneRepository } = require('../repository/index');
// const {FlightRespository } = require('../repository/index');
const { compareTime  } = require('../utils/helper');
const { AirplaneRepository } = require('../repository/index');
const { FlightRespository } = require('../repository/index');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightrespository = new FlightRespository();//AirplaneRepository
    }
 
    async createFlight(data) {
        try {
            // if(!compareTime(data.arrivalTime,data.departureTime)){
            //     throw{error:'arrival time cannot be less than departuretime'}
            // }
            const airplane = await  this.airplaneRepository.getAirplane(data.airplaneId);

            if (!airplane) {
                throw new Error(`Airplane with ID ${data.airplaneId} not found.`);
            }
            //console.log("airplane",airplane);

            data.totalSeats=airplane.capacity;
            //console.log(data.totalSeats=airplane.capacity);
            const flight = await this.flightRepository.createFlight(data);
            console.log(flight);
           
            
            return flight;
            
        } catch (error) {
            console.log("error on service layer");
            throw{error};
        }
    }

    // async getFlightData() {

    // }
     
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