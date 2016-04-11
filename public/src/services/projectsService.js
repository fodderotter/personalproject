app.service("projectsService", function($http, $state, $q){
	this.getProjects = function(){
		var deferred = $q.defer();
		var inProgress = [];
		$http.get("/api/projects")
			.then(function(response){
				for (var i = 0; i < response.data.length; i++){
					if(response.data[i].status!==true){
						inProgress.push(response.data[i])
					}
				}
				deferred.resolve(inProgress);
			})
			return deferred.promise;
	}
	this.getCompleted = function(){
		var deferred = $q.defer();
		var completed = [];
		$http.get("/api/projects/")
			.then(function(response){
				for (var i = 0; i < response.data.length; i++){
					if(response.data[i].status===true){
						completed.push(response.data[i])
					}
				}
				deferred.resolve(completed);
			})
			return deferred.promise;
	}
	this.addProject = function(projects) {
		return $http.post("/api/projects", projects)
	}
	this.deleteProject = function(id){
		return $http.delete("/api/projects/" + id);
	}
	this.changeStatus = function(id){
		return $http.put("/api/projects/" + id);
	}
	this.getTasks = function(id){
		var deferred = $q.defer();
		$http.get("/api/projects/" + id)
			.then(function(response){								
				deferred.resolve(response.data.tasks);
			})
		return deferred.promise;
	}
	this.addTask = function(id, task){
		return $http.post("/api/projects/"+id, task)
	}
	this.deleteTask = function(id){
		return $http.delete("/api/tasks/"+id)
	}
	this.getProjectById = function(id){
		return $http.get("/api/projects/"+id);
	}
})