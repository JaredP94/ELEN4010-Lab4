"use strict";
var chai = require("chai");
var todoList = require('../todoList');
chai.should();

describe("Hello", function() { 
	describe("World", function(){
		it("hello should greet the world", function(){
			var hello = "world";
       		hello.should.equal("world");
    	});
	});
});

describe("Add", function() {
	describe("One", function() {
		it("One addition should add one item", function() {
			todoList.add('item');
			var firstItem = todoList.get(0);
			firstItem.should.equal('item');
		});
	});
});