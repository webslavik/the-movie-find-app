(function() {

	'use strict';

	function movieCtrl($stateParams, TMDb) {
		let vm = this;

		let onGetMore = (data) => {
			vm.data = data;
			console.log(data);
		};

		let onError = () => {
			console.log(`Can't get more info about movie...`);
		};

		TMDb.getMoreInfo($stateParams.movieId)
				.then(onGetMore, onError);

		vm.imagePath = 'http://image.tmdb.org/t/p/w500/';

	}

	angular.module('app').controller('movieCtrl', movieCtrl);

})();