const db = require('./models');


const controller = {};


controller.getRealPlants = async (req, res, next) => {
  console.log('in here');
  try {
    const queryStr = 'SELECT * FROM real_plants';
    const response = await db.query(queryStr)
      // .then(response => {
        console.log('GETREALPLANTS RESPONSE: ', response.rows);
        res.locals.realPlants = response.rows;
      // })
      next();
  }
  catch (err) {
    return next({
      log: `controller.getRealPlants: ERROR: ${err}`,
      message: {
        err: 'Error occurred in controller.getRealPlants. Check server log for more detail',
      },
      status: 400,
    });
  }
};


controller.getFakePlants = async (req, res, next) => {
  try {
    const queryStr = 'SELECT * FROM fake_plants';
    const response = await db.query(queryStr)
      // .then(response => {
        console.log('GETFAKEPLANTS RESPONSE: ', response);
        res.locals.fakePlants = response.rows;
        next();
      // })
  }
  catch (err) {
    return next({
      log: `controller.getFakePlants: ERROR: ${err}`,
      message: {
        err: 'Error occurred in controller.getFakePlants. Check server log for more detail',
      },
      status: 400,
    });
  }
};


module.exports = controller;