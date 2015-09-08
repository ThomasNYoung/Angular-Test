(function(){
	'use strict';

	var app = angular.module("modelTest", []);

	app.controller("UserController", function() {
		this.newUser = {};
		this.users = [];

		this.addUser = function() {
			this.users.push(this.newUser);
			this.newUser = {};
		};
	});
})();

