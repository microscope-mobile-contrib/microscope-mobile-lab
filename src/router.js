'use strict';

// Router class
function Router($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: '/components/home/controllers/home.html'
	})


	.otherwise({ redirectTo: '/' });
}

module.exports = Router;