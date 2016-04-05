app.controller("projectsCtrl", function($scope, projectsService, projects){
	$scope.projects = projects.data;
	$scope.addProject = function(project){		
		return projectsService.addProject(project);
	}
	// $scope.loadProject = function(id){
		
	// }
})

