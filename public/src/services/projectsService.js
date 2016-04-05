app.service("projectsService", function($http, $state, $q){
	this.getProjects = function(){
		return $http.get("/api/projects");
	}
	this.addProject = function(projects) {
		return $http.post("/api/projects", projects)
	}
	this.getTasks = function(id){
		var deferred = $q.defer();
		$http.get("/api/projects/" + id)
			.then(function(response){								
				deferred.resolve(response.data.task);
			})
		return deferred.promise;
	}
})