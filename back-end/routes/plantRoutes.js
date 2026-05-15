const express = require("express");
const plantrouter = express.Router();


const {
      getAllPlants,
  getPlantById,
} = require("../controllers/plantController")



plantrouter.get("/" , getAllPlants)
plantrouter.get("/:id" , getPlantById)


module.exports = plantrouter;