var app = angular.module('blog.controllers.signupForm', []);

app.controller('SignupFormCtrl', [
	'$scope',
	function($scope) {
		$scope.onSubmit = function(signupForm){
			console.log(signupForm);
		}
	}
])