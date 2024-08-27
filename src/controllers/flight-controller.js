const {FlightService} = require("../services/index");

const flightService = new FlightService();
console.log(flightService.createFlights);

const create = async(req,res)=>{
    try {
        const filteredData = {
            flightNumber:  req.body.flightNumber,
            airplaneId :req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime, 
            departureTime : req.body.departureTime,
            price : req.body.price
        }
        const flight = await flightService.createFlights(filteredData);
        return res
        .status(201)
        .json(
            {
                data : flight,
                success : true,
                message : "Successfully created the flight",
                err : {}
            }
        )
    } catch (error) {
        console.log("Something went wrong in flight controller");
        return res
        .status(500)
        .json(
            {
                data : {},
                success : false,
                message : "Not able to create the flight",
                err : error
            }
        )
    }
}

const get = async(req,res)=>{
    try {
        const flight = await flightService.getFlight(req.body);
        return res
        .status(201)
        .json(
            {
                data : flight,
                success : true,
                message : "Successfully fetched the flight",
                err : {}
            }
        )
    } catch (error) {
        console.log("Something went wrong in flight controller");
        return res
        .status(500)
        .json(
            {
                data : {},
                success : false,
                message : "Not able to fetch the flight",
                err : error
            }
        )
    }
}

const getAll = async(req,res)=>{
    try {
        const flight = await flightService.getAllFlights(req.query);
        return res
        .status(201)
        .json(
            {
                data : flight,
                success : true,
                message : "Successfully fetched all the flights",
                err : {}
            }
        )
    } catch (error) {
        console.log("Something went wrong in flight controller");
        return res
        .status(500)
        .json(
            {
                data : {},
                success : false,
                message : "Not able to fetch the flights",
                err : error
            }
        )
    }
}

module.exports={
  create,
  get,
  getAll
}