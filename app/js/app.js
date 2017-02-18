(function() {

	'use strict';

	angular.module('app', ['ngMaterial', 'ui.router'])


	angular.module('app').config(($stateProvider) => {

		$stateProvider
			.state('themovie', {
				url: '',
				abtsract: true,
				views: {
					'toolbar': {
						templateUrl: 'views/toolbar.html'
					},
					'cards-list': {
						templateUrl: 'views/cards-list.html'
					},
					'about-button': {
						templateUrl: 'views/about-button.html'
					}
				}
			});

	});


	angular.module('app').config(($mdThemingProvider, $mdIconProvider) => {
			$mdThemingProvider.theme('default')
		    .primaryPalette('blue')
		    .accentPalette('pink');

		  $mdIconProvider
		  	.icon('question', 'img/icons/question.svg');
		});

})();