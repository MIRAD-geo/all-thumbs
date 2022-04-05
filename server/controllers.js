const db = require('./models');

const controller = {};


controller.getRealPlants = (req, res, next) => {
  try {
    const query = 'SELECT * FROM real_plants';
    db.query(query)
      .then(response => {
        console.log('GETREALPLANTS RESPONSE: ', response);
        res.locals.realPlants = response;
        return next();
      })
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


controller.getFakePlants = (req, res, next) => {
  try {
    const query = 'SELECT * FROM fake_plants';
    db.query(query)
      .then(response => {
        console.log('GETFAKEPLANTS RESPONSE: ', response);
        res.locals.fakePlants = response;
        return next();
      })
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

