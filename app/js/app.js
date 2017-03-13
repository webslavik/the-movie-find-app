(function() {

	'use strict';

	angular.module('app', ['ngMaterial', 'ui.router'])


	angular.module('app').config(($stateProvider, $urlRouterProvider) => {

		$urlRouterProvider.otherwise('');

		$stateProvider

		// home
		.state('home', {
			url: '',
			// abtsract: true,
			views: {
				'toolbar': {
					templateUrl: 'views/toolbar.html'
				},
				'about-button': {
					templateUrl: 'views/about-button.html'
				},
				'content': {
					templateUrl: 'views/cards-list.html'
				},
			}
		})

		.state('home.movie', {
			// parent: 'home',
			url: '/movie/:movieId',
			views: {
				'content@': {
					templateUrl: 'views/movie.html',
					controller: 'movieCtrl',
					controllerAs: 'movieCtrl'
				}
			}
		})
	});


	angular.module('app').config(($mdThemingProvider, $mdIconProvider) => {
			$mdThemingProvider.theme('default')
		    .primaryPalette('blue')
		    .accentPalette('pink');

		  $mdIconProvider
		  	.icon('question', 'img/icons/question.svg');
		});

})();