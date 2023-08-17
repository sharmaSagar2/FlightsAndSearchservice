const { Airplane }= require('../models/index');

class AirplaneRepository {
    async getAirplane(id) {
        try {
           const airplane  = await Airplane.findByPk(id);
            //const airplane = await Airplane.findByPk(id).then(airplane => airplane);
            return airplane;    
        } catch (error){
            console.log("error at repository layer");
            throw error;
        }
    } 
}
module.exports=AirplaneRepository;