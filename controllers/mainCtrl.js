var Projects = require("../schema/projects.js");
var Task = require("../schema/Tasks.js");

module.exports = {
	getProjects: function(req, res){
		Projects.find({}, function(err, response){
			if (err) {
				return res.status(500).send(err);
			}			
			res.send(response);		
		})
	}
	, postProjects: function(req, res){
		new Projects(req.body).save(function(err, response){
			if (err) {
				return res.status(500).send(err);
			}					
			res.send(response);
		})
	}
	, getProjectById: function(req, res){
		Projects.findById(req.params.id, function(err, response){
			if (err) {
				return res.status(500).send(err);
			}			
			res.send(response)
		})
	}
	// , postTaskById: function(req, res){

	// }
}
