(function(){
	'use strict';

	var app = angular.module("controllerTest2", []);

	app.controller("CartController", function() {
		this.newGuitar = {};
		this.guitars = [];

		this.addGuitar = function() {
			this.guitars.push(this.newGuitar);
			this.newGuitar = {};
		};
	});
})();
