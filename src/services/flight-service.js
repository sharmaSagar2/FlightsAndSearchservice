const { compareTime  } = require('../utils/helper');
const { AirplaneRepository } = require('../repository/index');
const { FlightRespository } = require('../repository/index');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightrespository = new FlightRespository();
    }
 
    async createFlight(data) {
        try {
            console.log(data);
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error:'arrival time cannot be less than departuretime'}
            }
            const airplane = await  this.airplaneRepository.getAirplane(data.airplaneId);

            if (!airplane) {
                throw new Error(`Airplane with ID ${data.airplaneId} not found.`);
            }

            //data.totalSeats = airplane.capacity;//also right
            const newData = {
                ...data, // Copy existing data properties
                totalSeats: airplane.capacity
            };
            const flight = await this.flightrespository.createFlight( newData);
            return flight;
            
        } catch (error) {
            console.log("error on service layer");
            throw{error};
        }
    }
    async getAllFlightData(data){
        try {
            const flight = await this.flightrespository.getAllFlight(data);
            return flight;
            
        } catch (error) {
            console.log("error on service layer");
            throw{error};   
        }
    }
    async getFlight(flightId) {
        try{
            const flight = await this.flightrespository.getFlight(flightId);
            return flight;
        } catch(error){
            console.log("error on service later");
            throw {error};
        }
    }
    async updateFlights(flightId ,data) {
        try {
            const response = await this.flightrespository.updateFlights(flightId,data);
            return response;
        } catch (error) {
            console.log("error on service later");
            throw {error};
        }
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