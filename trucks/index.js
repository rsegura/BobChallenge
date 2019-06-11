const { Router } = require('express');

const router = new Router();
const driverStatus = require(process.cwd()+'/trucks/models/driverStatus');


module.exports = (socket) =>{
	router.use(function timeLog (req, res, next) {
	  console.log('Time: ', Date.now())
	  next()
	});

	router.get('/connected', (req, res) =>{
		driverStatus.find({status:'delivering'}, function(err, docs){
			if(err) return res.status(500);
			return res.status(200).send({"trucks":docs});
		})
	});

	router.get('/status', (req, res) =>{
		for( var truck of socket.clientSet){
		  	socket.emitter.to(truck.id).emit('DRIVER_STATUS_REQUEST', {  'type': 'DRIVER_STATUS_REQUEST'});
		  }
		res.status(200).send({"trucks":Array.from(socket.clientSet)});

	})



	return router;
}