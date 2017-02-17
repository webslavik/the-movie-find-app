(function() {

	'use strict';

	angular.module('app', ['ngMaterial'])
		.config(($mdThemingProvider, $mdIconProvider) => {
			$mdThemingProvider.theme('default')
		    .primaryPalette('blue')
		    .accentPalette('pink');

		  $mdIconProvider
		  	.icon('question', 'img/icons/question.svg');
		});

})();