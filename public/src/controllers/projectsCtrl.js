app.controller("projectsCtrl", function($scope, projectsService, projects, tasks){
	$scope.projects = projects.data;
	$scope.addProject = function(project){		
		return projectsService.addProject(project);
	}

	$scope.loadProject = function(id){		
		$scope.tasks = projectsService.getTasks(id);
	}
})

