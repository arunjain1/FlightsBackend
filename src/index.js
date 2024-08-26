const express = require("express");
const {PORT} = require("./config/serverConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require('./routes/index.js');
const {Airport,City,Airplane} = require("./models/index.js");
const db = require('./models/index.js');

const  setupAndStartServer = async()=>{
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use('/api',ApiRoutes);
  app.listen(PORT,async()=>{
    console.log(`Server Started at ${PORT}`);
    if(process.env.DB_SYNC){
      db.sequelize.sync({alter : true});
    }



    /***************************************************
    const city = await City.findOne({
        where : {
           id : 6
        }
    })
    const airports = await city.getAirports();
    const createnewAirport = await Airport.create(
      {
        name : "JVA",
        cityId : 6
      }
    )
    
    const newAirport = await Airport.findOne({
      where:{
        id : 5
      }
    });
    await city.addAirport(newAirport)
    console.log(airports); 
    **********************************************************************/
  })
}
setupAndStartServer();