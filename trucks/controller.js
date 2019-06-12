const  driverService   = require(process.cwd()+'/trucks/services');
const getDriversDelivering = async (req, res, next) => {
  try {
    docs = await driverService.findDriversByStatus('delivering')
    
    return res.status(200).send({"trucks":docs});
  } catch(e) {
    console.log(e.message)
    return res.sendStatus(500)
  }
}

function sendDriverRequestStatus(socket) {
  return async(req, res, next) =>{
    for( var truck of socket.clientSet){
          socket.emitter.to(truck.id).emit('DRIVER_STATUS_REQUEST', {  'type': 'DRIVER_STATUS_REQUEST'});
        }
      res.status(200).send({"trucks":Array.from(socket.clientSet)});
  }
}
module.exports = {
  getDriversDelivering,
  sendDriverRequestStatus
}