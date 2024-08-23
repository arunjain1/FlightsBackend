const { City }  = require('../models/index');

class CityRepository {
    async createCity({name}){
       try{
         const city = await City.create({
          name
        });
         return city;
       }
       catch(error){
        console.log("Something went wrong while creating the city")
         throw {error};
       }
    }
    async deleteCity({cityId}){
        try{
          await City.destroy({
            where :{
                id : cityId
            }
          });
          return true;
        }
        catch(error){
          console.log("Something went wrong while deleting the city")
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
        console.log("Something went wrong while updating the city")
        throw {error};
      }
    }
   
    async getCity(cityId){
       try{
         //const city = await City.findByPk(cityId); // This way we can find the city by using the primary key
         const city = await City.findOne(cityId);
         return city
       }
       catch(error){
        console.log("Something went wrong while getting the city")
        throw {error};
       }
    }

}

module.exports = CityRepository;