(function(){
'use strict';

var app = angular.module("controllerTest", []);

app.controller("CartController", function(){
	// newGuitar = {};
	this.guitarList = [
		{brand:"Martin", price: "500"},
		{brand:"RainSong", price:"1100"},
		{brand:"Godin", price:"600"},
		{brand:"Seagull", price:"300"},
		{brand:"Diamond",  price: "250"}
		
	];
})




})();