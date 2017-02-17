(function() {

	'use strict';

	function mainCtrl($mdDialog, $mdMedia, TMDb) {
		let vm = this;

		let onGetMovie = (data) => {
			vm.data = data;
		};

		let onError = (data) => {
			console.log('Something went wrong...');
		};

		vm.about = (event) => {
			let useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

			$mdDialog.show({
				templateUrl: 'views/about.html',
				parent: angular.element(document.body),
				// controller: 'aboutCtrl',
				// controllerAs: 'aboutCtrl',
				targetEvent: event,
	      clickOutsideToClose: true,
	      fullscreen: useFullScreen
			});

		}


		vm.queryData = (movie) => {

			if(movie.length === 0) {
				vm.data = null;
			}

			TMDb.getMovies(movie)
				  .then(onGetMovie, onError);
		}

		TMDb.getMovies()
		  .then(onGetMovie, onError);

		vm.imagePath = 'http://image.tmdb.org/t/p/w500/';


	}

	angular.module('app').controller('mainCtrl', mainCtrl);


})();