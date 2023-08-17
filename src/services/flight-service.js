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
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error:'arrival time cannot be less than departuretime'}
            }
            const airplane = await  this.airplaneRepository.getAirplane(data.airplaneId);  
            // const flight = await this.flightrespository.createFlightt({
            //     ...data,totalSeats: data.airplaneId === null ? null : airplane.capacity
            // });
            const flight = await this.flightRepository.createFlight({
                flightNumber: data.flightNumber,
                airplaneId: data.airplaneId,
                departureId: data.departureId,
                arrivalId: data.arrivalId,
                arrivalTime: data.arrivalTime,
                departureTime: data.departureTime,
                price: data.price,
                totalSeats: data.airplaneId === null ? null : airplane.capacity,
              });
            
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