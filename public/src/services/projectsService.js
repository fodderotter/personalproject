app.service("projectsService", function($http, $state, $q){
	this.getProjects = function(){
		return $http.get("/api/projects");
	}
	this.addProject = function(projects) {
		return $http.post("/api/projects", projects)
	}
	this.getTasks = function(index){
		var deferred = $q.defer();
		var tasks = [];
		$http.get("/api/projects/" + index)
			.then(function(response){								
				tasks.push(response.data.task);
				console.log("tasks:", tasks)
			})
		deferred.resolve(tasks);
		return deferred.promise;
	}
})