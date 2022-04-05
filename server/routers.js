const express = require('express');
const controller = require('./controllers.js');
const router = express.Router();

router.get('/getPlants', controller.getRealPlants, (req, res) => {
  console.log('in router');
  res.status(200).json(res.locals.realPlants);
});

// router.get('/plant/:id', (req, res) => {
//   res.status(200).json(res.locals.plantId)
// });

// router.post('/user/:id', (req, res) => {
//   res.status(200).json(res.locals.users)
// });


module.exports = router;