/******************************************

    Módulo:
    Descripción:

********************************************/
//Definimos nombre del módulo
var __moduleName = '/modules/config';

///////////// Dependencias del módulo ///////////////////
var fs = require('fs');
var util = require('util');
var extend = require('extend');


/********************************************
 *            PÚBLICO
 *******************************************/

var config = {};
module.exports = config;

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
