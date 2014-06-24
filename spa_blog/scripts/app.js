var app = angular.module('blog', [
	'ui.router',
	'blog.controllers.home',
	'blog.controllers.loginForm',
	'blog.controllers.signupForm'
	]);

app.config([
	'$stateProvider', 
	'$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/home');

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home/index.html'
		})
		.state('home.list', {
			url: '/list',
			templateUrl: 'views/home/list.html',
			controller: 'HomeListCtrl'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'views/auth/login.html'
		})
		.state('login.signup', {
			url: '/signup',
			templateUrl: 'views/auth/signup.html'
		})
		.state('about', {
			url: '/about',
			views: {
				'' : { templateUrl: 'views/about/index.html' },
				'columnOne@about': { template: '<p>Look I am Left Column</p>' },
				'columnTwo@about': { template: '<p>Look I am Right Column</p>' }
			}
		})
	}
]);