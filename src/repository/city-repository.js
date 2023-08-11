//models can be access from repository

const { City } = require('../models/index'); 

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;    
        } catch (error) {
            console.log("error on repository layer");
            throw {error};    
        }
    }
    
    async deleteCity(cityId) {
        try {
            await City.destroy({
                where : {
                    id : cityId
                }
            });
            return true;
        } catch (error) {
            console.log("error on repository layer");
            throw {error};
        }
    }

    async updateCity(cityId,data) {
        try {
            const city = await City.update(data, {
                where: {
                    id : cityId
                }
            });
            return city;
        } catch (error) {
            console.log("error on repository layer");
        }

    }

    async getCity(cityId) {
        try {
             const city = await City.findByPK(cityId);
             return city;    
        } catch (error) {
            console.log("error on repository layer");
            throw{error};
            
        }

    }


}

module.exports = CityRepository;

//we will using this city repository to implement an api using which we will able create cities in our database