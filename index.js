var cluster = require("cluster");
const config = require("./modules/config");
config.loadConfiguration("config");
const MongoConnector = require(process.cwd()+'/modules/MongoConnector');
if (cluster.isMaster) {

	var Master = require("./master");
	var master = new Master({cluster: cluster});
	var cpuCount = require("os").cpus().length;

	for (var i = 0; i < cpuCount; i++) {
		master.createWorker();
	}

	cluster.on("exit", function (worker) {
		console.log("worker " + worker.id + "  died");
		master.spawnWorker(500);
	});
} else {
	var Workers = require("./workers");
	let mongoConnector = new MongoConnector({"MONGODB_URI":config.mongodbConnnection});
	var workers = new Workers();
	mongoConnector.connect().then(async () => {
		 workers.run();
		console.log("worker " + cluster.worker.id + "  running!");
	});
	
}
