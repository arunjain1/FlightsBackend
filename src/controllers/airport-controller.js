const {AirportService} = require("../services/index");

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        console.log(req.body);
        const response = await airportService.create(req.body);
        return res
        .status(201)
        .json(
            {
               success : true,
               message : "Successfully Created the airport",
               data : response,
               err : {}
            }
        )
    } catch (error) {
        console.log("Something went wrong in airport Controller");
        return res
        .status(500)
        .json(
            {
               data : {},
               success : false,
               message : "Cannot create a new Airport",
               err : error
            }
        )
    }
}

module.exports = {
    create
}