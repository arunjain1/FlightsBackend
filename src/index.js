const express = require("express");
const {PORT} = require("./config/serverConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require('./routes/index.js');
const CityRepository = require('./repository/city-repository.js');
const  setupAndStartServer = async()=>{
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use('/api',ApiRoutes);
  app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
    // const repoObject = new CityRepository();
    // repoObject.createCity({name : "New Delhi"});
  })
}
setupAndStartServer();