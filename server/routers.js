const express = require('express');
const controller = require('./controllers.js');
const router = express.Router();

router.get('/getAllPlants', 
  controller.getRealPlants, 
  controller.getFakePlants, 
  (req, res) => {
    res.status(200).json({ realPlants : res.locals.realPlants, fakePlants: res.locals.fakePlants });
});

router.get('/getRealPlants', 
  controller.getRealPlants, 
  (req, res) => {
    res.status(200).json(res.locals.realPlants);
});

router.get('/getFakePlants', 
  controller.getFakePlants, 
  (req, res) => {
    res.status(200).json(res.locals.fakePlants);
});

router.get('/fakeplant/:id', 
  controller.getFakePlantId, 
  (req, res) => {
    res.status(200).json(res.locals.fakePlantId);
});

router.get('/realplant/:id', 
  controller.getRealPlantId, 
  (req, res) => {
    res.status(200).json(res.locals.realPlantId);
});

router.post('/user/:id', 
  controller.getUserId, 
  (req, res) => {
    res.status(200).json(res.locals.userId);
});


module.exports = router;