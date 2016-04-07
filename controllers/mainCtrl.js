var Projects = require("../schema/projects.js");
var Task = require("../schema/Tasks.js");
var Owner = require("../schema/Owner.js");

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
		Projects.findById({_id: req.params.id}).populate("tasks").exec(function(err, response){
			if (err) {
				return res.status(500).send(err);
			}
			// response.populate("tasks")
			res.send(response)
		})
	}
	, postTaskById: function(req, res){
		new Task(req.body).save(function(err, task) {
			if (err) {
				return res.status(500).send(err);
			}
			Projects.findById(req.params.id, function(err, project){
				if (err) {
					return res.status(500).send(err);
				}
				project.tasks.push(task);
				project.save();
				res.send(project);
			})
		})
	}
	, getTaskById: function(req, res){
		Task.findById(req.params.id, function(err, response){
			if (err) {
				return res.status(500).send(err);
			}
			res.send(response);			
		})
	}
	, deleteProject: function(req, res){
		Projects.findByIdAndRemove(req.params.id, function(err, response){
			if (err) {
				return res.status(500).send(err);
			}
			res.send(response);			
		})
	}
	, deleteTask: function(req, res){
		Task.findByIdAndRemove(req.params.id, function(err, response){
			if (err) {
				return res.status(500).send(err);
			}						
			res.send(response);
		})
	}
}
