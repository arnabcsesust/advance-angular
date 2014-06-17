var app = angular.module('blog.controllers.home',[]);

app.controller('HomeListCtrl', [
	'$scope', 
	'$location',
	function($scope, $location){
		//$location.path('/about');
		$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
	}
]);