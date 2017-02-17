(function() {

	'use strict';

	function mainCtrl(TMDb) {
		let vm = this;

		let onGetMovie = (data) => {
			vm.data = data;
		};

		let onError = (data) => {
			console.log('Something went wrong...');
		};

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

		// if(vm.searchText.length === 0) {
		// 	alert('hi');
		// }

		console.log(vm.searchText);




	}

	angular.module('app').controller('mainCtrl', mainCtrl);


})();