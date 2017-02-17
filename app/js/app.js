(function() {

	'use strict';

	angular.module('app', ['ngMaterial'])
		.config(($mdThemingProvider) => {
			$mdThemingProvider.theme('default')
		    .primaryPalette('blue')
		    .accentPalette('pink');

		  $mdThemingProvider.theme('dark-grey')
		  	.backgroundPalette('grey').dark();
		});

})();