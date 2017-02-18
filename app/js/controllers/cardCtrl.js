(function() {

	'use strict';

	function cardCtrl(TMDb) {
		let vm = this;

		let onGetMore = (data) => {
			// vm.data = data;
			console.log(data);
		};

		let onError = () => {
			console.log(`Can't get more info about movie...`);
		};

		vm.getMovieId = (id) => {
			TMDb.getMoreInfo(id)
					.then(onGetMore, onError);
		};


	}

	angular.module('app').controller('cardCtrl', cardCtrl);

})();