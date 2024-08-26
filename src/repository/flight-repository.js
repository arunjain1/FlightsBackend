const {Flight} = require("../models/index");
const {Op} = require('sequelize');
class FlightRepository {

    #createFilter(data){
       let filter = {};
       if(data.arrivalAirportId){
         filter.arrivalAirportId = data.arrivalAirportId;
       }
       if(data.departureAirportId){
         filter.departureAirportId = data.departureAirportId
       }
    //    if(data.minPrice){
    //      Object.assign(filter,{price : {[Op.gte]:data.minPrice}});
    //    }
       let priceFilter= [];
       
       if(data.minPrice){
           priceFilter.push({price : {[Op.gte] : data.minPrice}});
       }
       if(data.maxPrice){
          priceFilter.push({price : {[Op.lte] : data.maxPrice}});
       }

       Object.assign(filter,{[Op.and] : priceFilter});
       return filter;
     
    }

    async createFlight(data){
        try {
            const response = await Flight.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository");
            throw {error};
        }
    }

    async getFlight({id}){    // To fetch an particular Flight
        try {
            const response = await Flight.findByPk(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in flight repository");
            throw {error};
        }
    } 

    async getAllFlights(filter){    // To fetch all the Flights
        try {
            const filterObject = this.#createFilter(filter)
            console.log(filterObject);
            const response = await Flight.findAll(
                { where : filterObject}
            )
            return response;
        } catch (error) {
            console.log("Something went wrong in flight repository");
            throw {error};
        }
    } 

}

module.exports = {
    FlightRepository
}