const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = 3000;
const router = require('./routers/routers.js');

const app = express();
app.use(express.json());
//built-in middleware that parses incoming request body's with urlencoded payloads - it is based on body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(cors());

//sends all routes to router
app.use('/api', router);


//unknown routes
app.use('*', (req, res) => {
	return res
		.status(404)
		.json({ err: 'endpoint requested is not found' });
});


//global error handler
app.use((err, req, res, next) => {
	const defaultErr = {
		log: `Express error handler caught unknown middleware error ${err}`,
		status: 500,
		message: {
			err: 'An error occurred.',
		},
	};
	const errorObj = Object.assign({}, defaultErr, err);
	console.log(errorObj.log);
	return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => console.log('Listening on port ' + PORT));


module.exports = app;