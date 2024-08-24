const {CityService} = require('../services/index.js');
const cityService = new CityService();

/***********
 * 
 * Post
 * data -> req.body
 * 
 */

const create = async(req,res)=>{
   try {
     const response = await cityService.createCity(req.body);
     return res.status(201).json(
        {
            data : response,
            success : true,
            message : "Successfully Created City",
            err : {}
        }
     )
   } catch (error) {
      console.log(error);
      return res.status(500).json(
        {
            data : {},
            success : false,
            message : "Failed to create city",
            err : error
        }
      )
   }
}
// Delete -> /city/:id
const destroy = async(req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(201).json(
           {
               data : response,
               success : true,
               message : "Successfully Deleted the City",
               err : {}
           }
        )
      } catch (error) {
         console.log(error);
         return res.status(500).json(
           {
               data : {},
               success : false,
               message : "Failed to delete the City",
               err : error
           }
         )
      }
}
// GET -> /city/:id
const get = async(req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(201).json(
           {
               data : response,
               success : true,
               message : "Successfully fetched the City",
               err : {}
           }
        )
      } catch (error) {
         console.log(error);
         return res.status(500).json(
           {
               data : {},
               success : false,
               message : "Failed to fetch the city",
               err : error
           }
         )
      }
}
// Patch -> /city/:id -> req.body
const update = async(req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json(
           {
               data : response,
               success : true,
               message : "Successfully Created City",
               err : {}
           }
        )
      } catch (error) {
         console.log(error);
         return res.status(500).json(
           {
               data : {},
               success : false,
               message : "Failed to update the city",
               err : error
           }
         )
      }
}

const getAll = async(req, res)=>{
    try {
        const cities = await cityService.getAllCities(req.query);
        return res
                .status(200)
                .json(
                    {
                        data : cities,
                        success : true,
                        message : "Successfully Fetched the Cities",
                        err : {}
                    }
                )
    } catch (error) {
        console.log(error);
        return res.status(500).json(
          {
              data : {},
              success : false,
              message : "Failed to get all the cities",
              err : error
          }
        )
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}