(function() {

	'use strict';

	function TMDb($http) {
		let service = this;
		const API = '?api_key=48b40155da6e1c749302058b3380da7a';
		const URL = 'https://api.themoviedb.org/3/';
		const SEARCH_MOVIE = 'search/movie';
		const MOVIE = 'movie/'
		const UPCOMING = 'movie/upcoming'
		const QUERY = '&query=';

		const URL_MOVIE = URL + SEARCH_MOVIE + API + QUERY;
		const URL_UPCOMING = URL + UPCOMING + API;

		service.getMovies = (movie) => {
			return $http.get(URL_MOVIE + movie)
									.then(response => {
										return response.data.results;
									});
		};

		service.getUpcoming = () => {
			return $http.get(URL_UPCOMING)
									.then(response => {
										return response.data.results;
									});
		};

		service.getMoreInfo = (id) => {
			return $http.get(URL + MOVIE + id + API)
									.then(response => {
										return response.data;
									});
		}


		return service;
		
	}

	angular.module('app').factory('TMDb', TMDb);


})();