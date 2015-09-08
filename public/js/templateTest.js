(function(){
	'use strict';

	var app = angular.module("templateTest", []);

	// app.controller("ExampleController", function() {
 //        this.showElement = true;

 //        this.toggleElement = function() {
 //            this.showElement = !this.showElement;
 //        };
 //    });

    app.controller("OtherController", function(){
    	this.myList = [
    		{text:"some text here"},
    		{text:"some more text here"},
    		{text:"more text"}
    	];
    })
})();