app.controller("completedCtrl", function($scope, current, projectsService){
	$scope.project = current;
	$scope.project.data.doc = new Date(current.data.doc).toLocaleDateString();
	$scope.tasks = current.data.tasks;
})