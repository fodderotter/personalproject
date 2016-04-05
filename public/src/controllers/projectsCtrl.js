app.controller("projectsCtrl", function($scope, projectsService, projects){
	$scope.projects = projects.data;
	$scope.addProject = function(project){		
		return projectsService.addProject(project);
	}

	$scope.loadProject = function(id){		
		projectsService.getTasks(id).then(function(res){
			console.log(res);
			$scope.tasks = [];
			$scope.tasks.push(res);
		});
		console.log($scope.tasks);
	}

	// $scope.$watch("tasks", function(){
	// 	console.log("tasks has changed: ", tasks)
	// 	$scope.$apply();
	// })	
})

