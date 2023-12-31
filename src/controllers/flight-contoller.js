const { FlightService } = require('../services/index');
const flightService =  new FlightService();
const { SuccessCodes } = require('../utils/error-codes');

const create = async (req,res) => {
    try {
        // so we can't pass any unwanted details to services layers
        const flightRequestData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            err : {},
            message : 'successfully created a flight'

        })
        
    } catch (error) {
        console.log("error at controller layer");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a flight",
            err:error
        })
    }  
}

const getAll =  async(req,res) => {
    try {
        const response = await flightService.getAllFlightData(req.query); 
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err : {},
            message : 'successfully fetched a flight'

        })
    } catch (error) {
        console.log("error at controller layer");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a flight",
            err:error
        })  
    }
}
const get = async (req,res) => {
    try {
        console.log(req.params.id);
        const response = await flightService.getFlight(req.params.id); 
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err : {},
            message : 'successfully fetched a flight'

        })
    } catch (error) {
        console.log("error at controller layer");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a flight",
            err:error
        })  
    }

}
const update = async (req,res) => {
    try {
        //console.log(req.params.id);
        const response = await flightService.updateFlights(req.params.id ,req.body); 
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err : {},
            message : 'successfully updated a flight'

        })
    } catch (error) {
        console.log("error at controller layer");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to update a flight",
            err:error
        })  
    }

}
 


module.exports={
    create,getAll,get,update
}