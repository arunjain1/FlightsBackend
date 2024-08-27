const { AirplaneRepository } = require("./airplane-repository");
const AirportRepository = require("./airport-repository");
const CityRepository = require("./city-repository");
const CrudRepository = require("./crud_repository");
const { FlightRepository } = require("./flight-repository");

module.exports = {
    CityRepository,
    FlightRepository,
    AirplaneRepository,
    AirportRepository,
    CrudRepository
}