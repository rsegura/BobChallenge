const express = require('express');
const helmet = require('helmet');
const trucks = require(process.cwd()+'/trucks');


var expressServer = function(config){
	this.config = config || {};
	this.expressServer = express();
	this.expressServer.use(helmet());
	this.expressServer.use("/api", trucks(config.socketIo))
	this.expressServer.all('*', (req, res) => res.sendStatus(404))

}

module.exports = expressServer;