const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.CityRepository = new CityRepository();
    }
    async createCity(data) {
        try {
           const city = await this.CityRepository.createCity(data); 
           return city;
        } catch (error) {
            console.log("error in service layer");
            throw{error};
        }
    }


    async createCitybulk(data) {
        try {
            const citiesString = data
            const cityNames = citiesString.split(',');
            const arrayOfObjects = cityNames.map(cityName => ({ name: cityName }));
            console.log(arrayOfObjects);
           const city = await this.CityRepository.createCitybulk(arrayOfObjects); 
           return city;
        } catch (error) {
            console.log("error in service layer");
            throw{error};
        }
    }

    async deleteCity(cityId) {
        try {
            const city = await this.CityRepository.deleteCity(cityId);
            return city;    
        } catch (error) {
            console.log("error in service layer");
            throw{error};
        }
    }

    async updateCity(cityId,data) {
        try {
          const city = await this.CityRepository.updateCity(cityId,data);
          return city;  
        } catch (error) {
            console.log("error in service layer");
            throw{error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;  
        } catch (error) {
            console.log("error in service layer");
            throw{error};
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await this.CityRepository.getAllCities({name: filter.name});
            return cities;
            
        } catch (error) {
            console.log("error in service layer");
            throw{error};   
        }
    }
}

module.exports = CityService;