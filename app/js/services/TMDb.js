(function() {

	'use strict';

	function TMDb($http) {
		let service = this;
		const API = '?api_key=48b40155da6e1c749302058b3380da7a';
		const URL = 'https://api.themoviedb.org/3/';
		const SEARCH_MOVIE = 'search/movie';
		const QUERY = '&query=';

		const URL_MOVIE = URL + SEARCH_MOVIE + API + QUERY;

		service.getMovies = (movie) => {
			return $http.get(URL_MOVIE + movie)
								.then(response => {
									return response.data.results;
								});
		}

		return service;
		
	}

	angular.module('app').factory('TMDb', TMDb);


})();