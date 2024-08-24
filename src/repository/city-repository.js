const { City }  = require('../models/index');
const {Op} = require('sequelize');
class CityRepository {
    async createCity({name}){
       try{
         const city = await City.create({
          name
        });
         return city;
       }
       catch(error){
        console.log("Something went wrong while creating the city from DB")
         throw {error};
       }
    }
    async deleteCity(cityId){
        try{
          console.log("y0",cityId);
          await City.destroy({
            where :{
                id : cityId
            }
          });
          return true;
        }
        catch(error){
          console.log("Something went wrong while deleting the city from DB")
          throw {error};
        }
    }

    async updateCity(cityId,data){  // Here we have to firstly find by cityId and the update the value
      try{
        const city = await City.update(data,
          {
            where : {
              id : cityId
            }
          }
        );
        return city
      }
      catch(error){
        console.log("Something went wrong while updating the city from DB")
        throw {error};
      }
    }
   
    async getCity({cityId}){
       try{
         //const city = await City.findByPk(cityId); // This way we can find the city by using the primary key
         const city = await City.findOne(cityId);
         return city
       }
       catch(error){
        console.log("Something went wrong while getting the city from DB")
        throw {error};
       }
    }

    async getAllCities(filter){
       try {
        if(filter.name){
          const cities = await City.findAll(
            {
              where : {
                name : {
                  [Op.startsWith] : filter.name
                }
              }
            }
          )
          return cities;
        }
         const cities = await City.findAll();
         return cities;
       } catch (error) {
         console.log("Something went wrong while getting the cities from DB")
         throw {error};
       }
    }

}

module.exports = CityRepository;