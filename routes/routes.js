var mainCtrl = require("../controllers/mainCtrl.js");

module.exports = function(app){
	app.route("/api/projects")
		.get(mainCtrl.getProjects)
		.post(mainCtrl.postProjects);
	app.route("/api/projects/:id")
		.get(mainCtrl.getProjectById)
	// 	.put(mainCtrl.putProject)
	// 	.delete(mainCtrl.deleteProject);
}

