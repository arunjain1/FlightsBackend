const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }
    async createCity(data) {
        try {
          const response = await this.cityRepository.createCity(data);
          return response;
        }
        catch (error) {
            console.log("Something went wrong in city service");
            throw { error };
        }
    }
    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        }
        catch (error) {
            console.log("Something went wrong in city service");
            throw { error };
        }
    }
    async updateCity(cityId,data) {
        try {
           const city = await this.cityRepository.updateCity(cityId,data);
           return city;
        }
        catch (error) {
            console.log("Something went wrong in city service");
            throw { error };
        }
    }
    async getCity(cityId) {
        try {
          const city = await this.cityRepository.getCity(cityId);
          return city;
        }
        catch (error) {
            console.log("Something went wrong in city service");
            throw { error };
        }
    }
    async getAllCities(filter){
        try {
            const cities = await this.cityRepository.getAllCities({name : filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong in city service");
            throw { error };
        }
    }
}

module.exports = CityService;