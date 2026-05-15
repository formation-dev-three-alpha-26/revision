const Plant = require("../models/Plant");

const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.findAll();

    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ message: "error pour get les plantes" });
  }
};

const getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);

    res.status(200).json(plant);
  } catch (error) {
    res.status(500).json({ message: "error pour get plante" });
  }
};

module.exports = {
  getAllPlants,
  getPlantById,
};
