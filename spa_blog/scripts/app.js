var app = angular.module('blog', [
	'ui.router',
	'blog.controllers.home'
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