
const { FlightRepository, AirplaneRepository } = require('../repository/index');
const compareDate = require("../utils/compareDates.js");
class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlights(data) {
        try {
            if(!compareDate(data.arrivalTime,data.departureTime)){
                throw {error : "Arrival time cannot be less than departure time"}
            }
            const Airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({ ...data, totalSeats: Airplane.capacity });
            return flight;
        } catch (error) {
            console.log("Something went wrong in Flight service");
            throw { error };
        }
    }
    
    async getFlight(data){
        try {
            const flight = await this.flightRepository.getFlight(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in Flight service");
            throw { error };
        }
    }

    async getAllFlights(data){
        try {
            const Flights = await this.flightRepository.getAllFlights(data);
            return Flights;
        } catch (error) {
            console.log("Something went wrong in Flight service");
            throw { error };
        }
    }

    async updateFlights(id,data){
        try {
            const Flights = await this.flightRepository.update(id,data);
            return Flights;
        } catch (error) {
            console.log("Something went wrong in Flight service");
            throw { error };
        }
    }
}


module.exports = {
    FlightService
}