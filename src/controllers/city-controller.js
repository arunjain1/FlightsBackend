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
     const city = await cityService.createCity(req.body);
     return res.status(201).json(
        {
            data : city,
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

module.exports = {
    create,
    destroy,
    get,
    update
}