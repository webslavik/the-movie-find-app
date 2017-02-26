(function() {

	'use strict';

	function movieCtrl($stateParams, TMDb) {
		let vm = this;

		let onGetMore = (data) => {
			vm.aboutMovie = data;
			console.log(data);
		};

		let onError = () => {
			console.log(`Can't get more info about movie...`);
		};

		TMDb.getMoreInfo($stateParams.movieId)
				.then(onGetMore, onError);

	}

	angular.module('app').controller('movieCtrl', movieCtrl);

})();