'use strict';

var readingTime = require('..');
var fromWords = require('../lib/from-words');
var chai = require('chai');

chai.should();

describe('fromWords()', function() {
	it('should return a function (without options)', function(){
		fromWords().should.be.a('function');
	});

	it('should return a function (with argument)', function(){
		fromWords(400).should.be.a('function');
	});

	it('should return a reading time in milliseconds for a given amount of words', function(){
		fromWords(400)(5).should.equal(750);
	});
});
