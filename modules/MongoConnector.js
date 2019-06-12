const mongoose = require('mongoose');

class MongoConnector {
	constructor (config) {
		this._config = config;
	}
	getMongoUrl() {
	    return this._config.MONGODB_URI;
	}
	connect () {
	    return mongoose.connect(this.getMongoUrl(),{ useNewUrlParser: true });
	}
}

module.exports = {MongoConnector};