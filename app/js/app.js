(function() {

	'use strict';

	angular.module('app', ['ngMaterial', 'ui.router'])


	angular.module('app').config(($stateProvider, $urlRouterProvider) => {


		$stateProvider

		// home
		.state('theMovie', {
			url: '',
			abtsract: true,
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

	});


	angular.module('app').config(($mdThemingProvider, $mdIconProvider) => {
			$mdThemingProvider.theme('default')
		    .primaryPalette('blue')
		    .accentPalette('pink');

		  $mdIconProvider
		  	.icon('question', 'img/icons/question.svg');
		});

})();