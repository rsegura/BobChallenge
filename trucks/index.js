const { Router } = require('express');

const router = new Router();
const drivers  = require("./controller");
module.exports = (socket) =>{
	router.use(function timeLog (req, res, next) {
	  console.log('Time: ', Date.now())
	  next()
	});
	router.get('/connected',drivers.getDriversDelivering);
	router.get('/status', drivers.sendDriverRequestStatus(socket));
	return router;
}