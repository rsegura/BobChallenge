const driverStatus = require(process.cwd()+'/trucks/models/driverStatus'); 

module.exports.findDriversByStatus = async (status) => {
	  try {
	  	return 	await driverStatus.find({status:status});

	  } catch(e) {
	    throw new Error(e.message)
	  }
	
}
