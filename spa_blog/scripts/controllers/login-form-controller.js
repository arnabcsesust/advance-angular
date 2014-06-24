var app = angular.module('blog.controllers.loginForm',[]);

app.controller('LoginFormCtrl',[
	'$scope',
	function($scope) {
		$scope.onSubmit = function(loginForm){
			console.log(loginForm);
		}
	}
])