redisConfig = {
 host: 'localhost',
 port: 6379
};

var io = require('socket.io')(40718);
var redis = require('socket.io-redis');
var emitter = require('socket.io-emitter')(redisConfig);
const mongoose = require('mongoose');
const driverStatus = require('./trucks/models/driverStatus');

var serverName = 'BoB';
var clientSet  = new Set();
var roomSet    = new Set();
var nameSpaceBoB  = io.of('/');


io.adapter(redis(redisConfig));

var SocketIO = function(){
   this.nameSpaceBoB = nameSpaceBoB;
   this.clientSet = clientSet;
   this.emitter = emitter;
   var self = this;
   this.nameSpaceBoB.on('connection', function (socket) {
    self.clientSet.add({'id':socket.id});
    
    socket.on('DRIVER_STATUS_RESPONSE',data =>{
      driverStatus.findOneAndUpdate({
          _id: data.payload.driverId
      }, {"status": data.payload.status}, { upsert: true, new:true }, function(err, res) {
      });
   });

    socket.on('disconnect', function(data) {
      clientSet.delete(socket.id);
    });

   });

}

module.exports = SocketIO;
