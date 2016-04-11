var mainCtrl = require("../controllers/mainCtrl.js");

module.exports = function(app){
	app.route("/api/projects")
		.get(mainCtrl.getProjects)
		.post(mainCtrl.postProjects);
	app.route("/api/projects/:id")
		.get(mainCtrl.getProjectById)
		.post(mainCtrl.postTaskById)
		.delete(mainCtrl.deleteProject)
		.put(mainCtrl.updateProjectStatus);
	app.route("/api/tasks/:id")
		.get(mainCtrl.getTaskById)
		.delete(mainCtrl.deleteTaskById);
}

