(function(){
'use strict';

var app = angular.module("controllerTest", []);

app.controller("CartController", function(){
	this.newGuitar = {};
	
	this.guitars = [];
	
	this.guitar = [
	{brand:"Martin", price: "500", quantity: "3"},
	{brand:"RainSong", price:"1100", quantity: "5"},
	{brand:"Godin", price:"600", quantity: "7"},
	{brand:"Seagull", price:"300", quantity: "1"},
	{brand:"Diamond",  price: "250", quantity: "8"}
		
	];



		

	this.addGuitar = function() {
		this.guitars.push(this.newGuitar);
		this.newGuitar = {};
	};
});


})();