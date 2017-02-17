(function() {

	'use strict';

	function mainCtrl(TMDb) {
		let vm = this;

		let onGetMovie = (data) => {
			vm.data = data;
			console.log(data[0]);
		};

		let onError = (data) => {
			console.log('Something went wrong...');
		};

		vm.queryData = (movie) => {
			TMDb.getMovies(movie)
				  .then(onGetMovie, onError);
		}

		vm.imagePath = 'http://image.tmdb.org/t/p/w500/';


	}

	angular.module('app').controller('mainCtrl', mainCtrl);


})();