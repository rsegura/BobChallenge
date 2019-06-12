
var __moduleName = '/modules/config';

const fs = require('fs');
const util = require('util');
const extend = require('extend');

const config = {};

config.loadConfiguration = function loadConfiguration(mode){

	console.log('LOADING ENVIRONMENT --- '+mode+' ----');
	var data = fs.readFileSync('./config/'+mode+'.json');

	try {
		configObj = JSON.parse(data);
		extend(true, config, configObj);
	}
	catch (err) {
		console.log('Error parseando el fichero '+mode+'.json de configuración.');
		console.log(err);
	}


};
module.exports = config;
