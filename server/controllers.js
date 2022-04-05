const db = require('./models');


const controller = {};


controller.getRealPlants = async (req, res, next) => {
  try {
    const queryStr = 'SELECT * FROM real_plants';
    const response = await db.query(queryStr)
    console.log('GET REAL PLANTS RESPONSE: ', response.rows);
    res.locals.realPlants = response.rows;
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
    console.log('GET FAKE PLANTS RESPONSE: ', response);
    res.locals.fakePlants = response.rows;
    next();
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


controller.getFakePlantId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const queryStr = `SELECT * FROM fake_plants WHERE id=${id}`;
    const response = await db.query(queryStr)
    console.log('GET FAKE PLANT ID RESPONSE: ', response.rows);
    res.locals.fakePlantId = response.rows;
    next();
  }
  catch (err) {
    return next({
      log: `controller.getFakePlantId: ERROR: ${err}`,
      message: {
        err: 'Error occurred in controller.getFakePlantId. Check server log for more detail',
      },
      status: 400,
    });
  }
};


controller.getRealPlantId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const queryStr = `SELECT * FROM real_plants WHERE id=${id}`;
    const response = await db.query(queryStr)
    res.locals.realPlantId = response.rows;
    next();
  }
  catch (err) {
    return next({
      log: `controller.getRealPlantId: ERROR: ${err}`,
      message: {
        err: 'Error occurred in controller.getRealPlantId. Check server log for more detail',
      },
      status: 400,
    })
  }
};


controller.getUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const queryStr = `SELECT * FROM allthumbs_users WHERE id=${id}`;
    const response = await db.query(queryStr);
    res.locals.userId = response.rows;
    next()
  }
  catch (err) {
    return next({
      log: `controller.getUserId: ERROR: ${err}`,
      message: {
        err: 'Error occurred in controller.getUserId. Check server log for more detail',
      },
      status: 400,
    })
  }
}


module.exports = controller;