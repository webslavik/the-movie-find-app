(function() {

	'use strict';

	function mainCtrl($mdDialog, $mdMedia, TMDb) {
		let vm = this;

		let onGetMovie = (data) => {
			vm.data = data;
		};

		let onError = (error) => {
			console.log('Something went wrong...');
		};


		let onGetUpcoming = (data) => {
			vm.data = data;
		};

		let onUpcomingError = (error) => {
			console.log('Upcoming data is error');
		}


		vm.about = (event) => {
			let useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

			$mdDialog.show({
				templateUrl: 'views/about.html',
				parent: angular.element(document.body),
				// controller: 'aboutCtrl',
				// controllerAs: 'aboutCtrl',
				targetEvent: event,
	      clickOutsideToClose: true,
	      // fullscreen: useFullScreen
			});

		}

		vm.queryData = (movie) => {

			if(movie.length === 0) {
				TMDb.getUpcoming()
						.then(onGetUpcoming, onUpcomingError);
			}

			TMDb.getMovies(movie)
				  .then(onGetMovie, onError);
		}


		TMDb.getUpcoming()
				.then(onGetUpcoming, onUpcomingError);


		vm.imagePath = 'http://image.tmdb.org/t/p/w500/';

		vm.test = (item) => {
			console.log(item);
		}

	}

	angular.module('app').controller('mainCtrl', mainCtrl);


})();