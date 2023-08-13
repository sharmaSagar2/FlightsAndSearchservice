//models can be access from repository
const { Op } = require('sequelize');
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
            //m1
            // const city = await City.update(data, {
            //     where: {
            //         id : cityId
            //     }
            // });
            // m2->it also work but will not return updated object
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("error on repository layer");
        }

    }

    async getCity(cityId) {
        try {
             const city = await City.findByPk(cityId);
             return city;    
        } catch (error) {
            console.log("error on repository layer");
            throw{error};
            
        }

    }

    async getAllCities(filter){ //filter can be empty also
        try {
            if(filter.name) {
            
                const cities = await City.findAll({
                    where : {
                        name : {
                           [Op.startsWith]:filter.name
                        }
                    }                
                });
                console.log(cities);
            
                return cities;
            }
            const cities = await City.findAll();
            return cities;
            
        } catch (error) {
            console.log("error on repository layer");
            throw{error};    
        }
    }


}

module.exports = CityRepository;

//we will using this city repository to implement an api using which we will able create cities in our database