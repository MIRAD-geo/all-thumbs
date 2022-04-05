const express = require('express');
const controller = require('./controllers.js');
const router = express.Router();

router.get('/getPlants', controller.getRealPlants, controller.getFakePlants, (req, res) => {
  return res.status(200).json(...res.locals.plants)
});

router.get('/plant/:id', (req, res) => {
  return res.status(200).json(...res.locals.plantId)
});

router.post('/user/:id', (req, res) => {
  return res.status(200).json(...res.locals.users)
});


